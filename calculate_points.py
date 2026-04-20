import os
from supabase import create_client, Client
from dotenv import load_dotenv

# 1. Carrega as variáveis de ambiente
load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_SERVICE_ROLE_KEY") # Usando Service Role para ignorar RLS

if not SUPABASE_URL or not SUPABASE_KEY:
    raise RuntimeError("❌ Variáveis de ambiente do Supabase não configuradas no .env")

def main():
    supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)
    print("🔌 Conectado ao Supabase (Motor de Pontuação)...")

    # 2. Busca apenas os jogos que já aconteceram (onde gols não são nulos)
    partidas_response = supabase.table("partidas").select("*").not_.is_("gols_a", "null").execute()
    partidas_encerradas = partidas_response.data

    if not partidas_encerradas:
        print("⚠️ Nenhum jogo encerrado (com placar) encontrado. Nada a calcular.")
        return

    # Cria um dicionário rápido para buscar o resultado do jogo pelo ID
    resultados_oficiais = { 
        p["id"]: {"gols_a": p["gols_a"], "gols_b": p["gols_b"]} 
        for p in partidas_encerradas 
    }

    print(f"⚽ {len(resultados_oficiais)} jogos encerrados encontrados. Calculando palpites...")

    # 3. Busca todos os palpites
    palpites_response = supabase.table("palpites").select("*").execute()
    palpites = palpites_response.data

    # Dicionário para somar os pontos de cada usuário: { user_id: total_pontos }
    pontuacao_usuarios = {}

    # 4. A Lógica / Engine do Bolão
    for palpite in palpites:
        user_id = palpite["user_id"]
        partida_id = palpite["partida_id"]

        # Se esse usuário ainda não está no dicionário, começa com zero
        if user_id not in pontuacao_usuarios:
            pontuacao_usuarios[user_id] = 0

        # Só calcula se o jogo deste palpite já acabou
        if partida_id in resultados_oficiais:
            real_a = resultados_oficiais[partida_id]["gols_a"]
            real_b = resultados_oficiais[partida_id]["gols_b"]
            palp_a = palpite["gols_a"]
            palp_b = palpite["gols_b"]

            pontos = 0

            # REGRA 1: Placar Exato (10 pontos)
            if real_a == palp_a and real_b == palp_b:
                pontos = 10
            else:
                # REGRA 2: Acertou o Vencedor ou Empate, mas errou o placar exato (5 pontos)
                real_diff = real_a - real_b
                palp_diff = palp_a - palp_b
                
                # Se ambos forem positivos (A ganhou), ou negativos (B ganhou), ou zero (Empate)
                if (real_diff > 0 and palp_diff > 0) or \
                   (real_diff < 0 and palp_diff < 0) or \
                   (real_diff == 0 and palp_diff == 0):
                    pontos = 5
            
            pontuacao_usuarios[user_id] += pontos

    print(f"📊 Pontuações calculadas para {len(pontuacao_usuarios)} usuários.")

    # 5. Salvar na tabela de Ranking
    dados_ranking = []
# 5. Salvar na tabela de Ranking
    dados_ranking = []
    for user_id, pontos in pontuacao_usuarios.items():
        dados_ranking.append({
            "user_id": user_id,
            "total_pontos": pontos  # A chave é a coluna do banco, o valor é a variável
        })

    if dados_ranking:
        # Usa upsert para atualizar se o usuário já existir no ranking
        # IMPORTANTE: A tabela 'ranking' precisa ter a coluna 'user_id' como Primary Key ou Unique
        supabase.table("ranking").upsert(dados_ranking, on_conflict="user_id").execute()
        print("🏆 Tabela de Ranking atualizada com sucesso!")

if __name__ == "__main__":
    main()