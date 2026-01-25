import os
from supabase import create_client, Client
from dotenv import load_dotenv

# Carrega variáveis do .env para o ambiente
load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_SERVICE_ROLE_KEY")

if not SUPABASE_URL or not SUPABASE_KEY:
    raise RuntimeError("❌ Variáveis de ambiente do Supabase não configuradas")

def main():
    # 1. Conexão com o Supabase
    supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)
    
    print("🔌 Conectado ao Supabase...")

    # 2. Massa de dados (Mock dos jogos da Copa 2026 - Grupo fictício)
    # No futuro, substituiremos isso por um requests.get('api-futebol.com/fixtures')
    jogos = [
        {
            "time_a": "Brasil",
            "time_b": "Croácia",
            "data_hora": "2026-06-12T17:00:00-03:00",
            "status": "agendado"
        },
        {
            "time_a": "França",
            "time_b": "Alemanha",
            "data_hora": "2026-06-13T16:00:00-03:00",
            "status": "agendado"
        },
        {
            "time_a": "Argentina",
            "time_b": "Espanha",
            "data_hora": "2026-06-14T20:00:00-03:00",
            "status": "agendado"
        }
    ]

    print(f"🚀 Iniciando ingestão de {len(jogos)} jogos...")

    # 3. Ingestão Idempotente
    for jogo in jogos:
        # Usamos 'upsert' para garantir que se o jogo já existe, ele atualiza.
        # Para o upsert funcionar bem, idealmente precisaríamos de um ID fixo ou uma constraint única.
        # Como simplificamos a tabela, vamos fazer uma busca antes (Look-up).
        
        # Verifica se já existe um jogo entre esses times nessa data
        existing = supabase.table("partidas").select("*").eq("time_a", jogo["time_a"]).eq("time_b", jogo["time_b"]).execute()
        
        if len(existing.data) > 0:
            print(f"⚠️  Jogo {jogo['time_a']} x {jogo['time_b']} já existe. Pulando...")
            # Aqui poderíamos fazer um update se quiséssemos atualizar horário/status
        else:
            data = supabase.table("partidas").insert(jogo).execute()
            print(f"✅ Jogo {jogo['time_a']} x {jogo['time_b']} inserido com sucesso!")

if __name__ == "__main__":
    main()