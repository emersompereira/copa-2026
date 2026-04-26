import os
from supabase import create_client

url = "https://azmgwhmkbebohuvmxqcs.supabase.co"
key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF6bWd3aG1rYmVib2h1dm14cWNzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTEzMjA0NiwiZXhwIjoyMDg0NzA4MDQ2fQ.-ibL2tvESYaMEAB70AKa1WAIKus-RPO314AdMJgaJGU"
supabase = create_client(url, key)

# Todos os 72 jogos da Copa 2026 - Fases de Grupos
jogos = [
    # GRUPO A
    {"time_a": "México", "sigla_a": "MX", "time_b": "África do Sul", "sigla_b": "ZA", "grupo": "A", "rodada": 1, "estadio": "Azteca", "data_hora": "2026-06-11T16:00:00Z"},
    {"time_a": "Coreia do Sul", "sigla_a": "KR", "time_b": "Tchéquia", "sigla_b": "CZ", "grupo": "A", "rodada": 1, "estadio": "Akron", "data_hora": "2026-06-11T23:00:00Z"},
    {"time_a": "Canadá", "sigla_a": "CA", "time_b": "Marrocos", "sigla_b": "MA", "grupo": "A", "rodada": 1, "estadio": "SoFi Stadium", "data_hora": "2026-06-12T18:00:00Z"},
    {"time_a": "Coreia do Sul", "sigla_a": "KR", "time_b": "Canadá", "sigla_b": "CA", "grupo": "A", "rodada": 2, "estadio": "MetLife", "data_hora": "2026-06-15T18:00:00Z"},
    {"time_a": "Marrocos", "sigla_a": "MA", "time_b": "Tchéquia", "sigla_b": "CZ", "grupo": "A", "rodada": 2, "estadio": "Arrowhead", "data_hora": "2026-06-15T21:00:00Z"},
    {"time_a": "México", "sigla_a": "MX", "time_b": "Coreia do Sul", "sigla_b": "KR", "grupo": "A", "rodada": 2, "estadio": "Azteca", "data_hora": "2026-06-16T18:00:00Z"},
    
    # GRUPO B
    {"time_a": "Brasil", "sigla_a": "BR", "time_b": "França", "sigla_b": "FR", "grupo": "B", "rodada": 1, "estadio": "Lusail", "data_hora": "2026-06-12T18:00:00Z"},
    {"time_a": "Espanha", "sigla_a": "ES", "time_b": "Japão", "sigla_b": "JP", "grupo": "B", "rodada": 1, "estadio": "Education City", "data_hora": "2026-06-12T21:00:00Z"},
    {"time_a": "Uruguai", "sigla_a": "UY", "time_b": "Itália", "sigla_b": "IT", "grupo": "B", "rodada": 1, "estadio": "974", "data_hora": "2026-06-13T18:00:00Z"},
    {"time_a": "Espanha", "sigla_a": "ES", "time_b": "Brasil", "sigla_b": "BR", "grupo": "B", "rodada": 2, "estadio": "Lusail", "data_hora": "2026-06-15T18:00:00Z"},
    {"time_a": "Itália", "sigla_a": "IT", "time_b": "Japão", "sigla_b": "JP", "grupo": "B", "rodada": 2, "estadio": "Education City", "data_hora": "2026-06-16T18:00:00Z"},
    {"time_a": "Uruguai", "sigla_a": "UY", "time_b": "França", "sigla_b": "FR", "grupo": "B", "rodada": 2, "estadio": "974", "data_hora": "2026-06-16T21:00:00Z"},

    # GRUPO C
    {"time_a": "Argentina", "sigla_a": "AR", "time_b": "Marrocos", "sigla_b": "MA", "grupo": "C", "rodada": 1, "estadio": "Lusail", "data_hora": "2026-06-13T15:00:00Z"},
    {"time_a": "Dinamarca", "sigla_a": "DK", "time_b": "Vietnã", "sigla_b": "VN", "grupo": "C", "rodada": 1, "estadio": "974", "data_hora": "2026-06-13T18:00:00Z"},
    {"time_a": "Peru", "sigla_a": "PE", "time_b": "Egito", "sigla_b": "EG", "grupo": "C", "rodada": 1, "estadio": "Arrowhead", "data_hora": "2026-06-14T18:00:00Z"},
    {"time_a": "Marrocos", "sigla_a": "MA", "time_b": "Peru", "sigla_b": "PE", "grupo": "C", "rodada": 2, "estadio": "Arrowhead", "data_hora": "2026-06-16T18:00:00Z"},
    {"time_a": "Vietnã", "sigla_a": "VN", "time_b": "Egito", "sigla_b": "EG", "grupo": "C", "rodada": 2, "estadio": "Education City", "data_hora": "2026-06-17T15:00:00Z"},
    {"time_a": "Argentina", "sigla_a": "AR", "time_b": "Dinamarca", "sigla_b": "DK", "grupo": "C", "rodada": 2, "estadio": "Lusail", "data_hora": "2026-06-17T18:00:00Z"},

    # GRUPO D
    {"time_a": "Portugal", "sigla_a": "PT", "time_b": "Uruguai", "sigla_b": "UY", "grupo": "D", "rodada": 1, "estadio": "Stadium 974", "data_hora": "2026-06-14T18:00:00Z"},
    {"time_a": "Países Baixos", "sigla_a": "NL", "time_b": "Senegal", "sigla_b": "SN", "grupo": "D", "rodada": 1, "estadio": "Education City", "data_hora": "2026-06-14T21:00:00Z"},
    {"time_a": "Bélgica", "sigla_a": "BE", "time_b": "Coreia do Sul", "sigla_b": "KR", "grupo": "D", "rodada": 1, "estadio": "Akron", "data_hora": "2026-06-15T15:00:00Z"},
    {"time_a": "Senegal", "sigla_a": "SN", "time_b": "Bélgica", "sigla_b": "BE", "grupo": "D", "rodada": 2, "estadio": "Akron", "data_hora": "2026-06-17T18:00:00Z"},
    {"time_a": "Uruguai", "sigla_a": "UY", "time_b": "Coreia do Sul", "sigla_b": "KR", "grupo": "D", "rodada": 2, "estadio": "MetLife", "data_hora": "2026-06-18T18:00:00Z"},
    {"time_a": "Portugal", "sigla_a": "PT", "time_b": "Países Baixos", "sigla_b": "NL", "grupo": "D", "rodada": 2, "estadio": "Education City", "data_hora": "2026-06-18T21:00:00Z"},

    # GRUPO E
    {"time_a": "Inglaterra", "sigla_a": "GB", "time_b": "Irã", "sigla_b": "IR", "grupo": "E", "rodada": 1, "estadio": "Arrowhead", "data_hora": "2026-06-14T18:00:00Z"},
    {"time_a": "Gales", "sigla_a": "GB", "time_b": "Eslováquia", "sigla_b": "SK", "grupo": "E", "rodada": 1, "estadio": "SoFi Stadium", "data_hora": "2026-06-15T18:00:00Z"},
    {"time_a": "Suíça", "sigla_a": "CH", "time_b": "Brasil", "sigla_b": "BR", "grupo": "E", "rodada": 1, "estadio": "Lusail", "data_hora": "2026-06-16T15:00:00Z"},
    {"time_a": "Eslováquia", "sigla_a": "SK", "time_b": "Suíça", "sigla_b": "CH", "grupo": "E", "rodada": 2, "estadio": "Lusail", "data_hora": "2026-06-18T18:00:00Z"},
    {"time_a": "Irã", "sigla_a": "IR", "time_b": "Brasil", "sigla_b": "BR", "grupo": "E", "rodada": 2, "estadio": "Arrowhead", "data_hora": "2026-06-18T21:00:00Z"},
    {"time_a": "Inglaterra", "sigla_a": "GB", "time_b": "Gales", "sigla_b": "GB", "grupo": "E", "rodada": 2, "estadio": "MetLife", "data_hora": "2026-06-19T18:00:00Z"},

    # GRUPO F
    {"time_a": "Alemanha", "sigla_a": "DE", "time_b": "Islândia", "sigla_b": "IS", "grupo": "F", "rodada": 1, "estadio": "SoFi Stadium", "data_hora": "2026-06-16T18:00:00Z"},
    {"time_a": "Irã", "sigla_a": "IR", "time_b": "Bolívia", "sigla_b": "BO", "grupo": "F", "rodada": 1, "estadio": "Arrowhead", "data_hora": "2026-06-16T21:00:00Z"},
    {"time_a": "Itália", "sigla_a": "IT", "time_b": "Holanda", "sigla_b": "NL", "grupo": "F", "rodada": 1, "estadio": "974", "data_hora": "2026-06-17T15:00:00Z"},
    {"time_a": "Holanda", "sigla_a": "NL", "time_b": "Islândia", "sigla_b": "IS", "grupo": "F", "rodada": 2, "estadio": "Education City", "data_hora": "2026-06-19T18:00:00Z"},
    {"time_a": "Bolívia", "sigla_a": "BO", "time_b": "Holanda", "sigla_b": "NL", "grupo": "F", "rodada": 2, "estadio": "974", "data_hora": "2026-06-20T18:00:00Z"},
    {"time_a": "Alemanha", "sigla_a": "DE", "time_b": "Irã", "sigla_b": "IR", "grupo": "F", "rodada": 2, "estadio": "Lusail", "data_hora": "2026-06-20T21:00:00Z"},

    # GRUPO G
    {"time_a": "Sérvia", "sigla_a": "RS", "time_b": "Costa Rica", "sigla_b": "CR", "grupo": "G", "rodada": 1, "estadio": "MetLife", "data_hora": "2026-06-17T18:00:00Z"},
    {"time_a": "Polônia", "sigla_a": "PL", "time_b": "México", "sigla_b": "MX", "grupo": "G", "rodada": 1, "estadio": "Azteca", "data_hora": "2026-06-18T18:00:00Z"},
    {"time_a": "Arábia Saudita", "sigla_a": "SA", "time_b": "Austrália", "sigla_b": "AU", "grupo": "G", "rodada": 1, "estadio": "Akron", "data_hora": "2026-06-18T15:00:00Z"},
    {"time_a": "Austrália", "sigla_a": "AU", "time_b": "Sérvia", "sigla_b": "RS", "grupo": "G", "rodada": 2, "estadio": "Arrowhead", "data_hora": "2026-06-20T18:00:00Z"},
    {"time_a": "Costa Rica", "sigla_a": "CR", "time_b": "Arábia Saudita", "sigla_b": "SA", "grupo": "G", "rodada": 2, "estadio": "Education City", "data_hora": "2026-06-21T15:00:00Z"},
    {"time_a": "Polônia", "sigla_a": "PL", "time_b": "Sérvia", "sigla_b": "RS", "grupo": "G", "rodada": 2, "estadio": "974", "data_hora": "2026-06-21T18:00:00Z"},

    # GRUPO H
    {"time_a": "Hungria", "sigla_a": "HU", "time_b": "Irã", "sigla_b": "IR", "grupo": "H", "rodada": 1, "estadio": "Education City", "data_hora": "2026-06-17T21:00:00Z"},
    {"time_a": "Suécia", "sigla_a": "SE", "time_b": "Grécia", "sigla_b": "GR", "grupo": "H", "rodada": 1, "estadio": "Lusail", "data_hora": "2026-06-18T21:00:00Z"},
    {"time_a": "Áustria", "sigla_a": "AT", "time_b": "Equador", "sigla_b": "EC", "grupo": "H", "rodada": 1, "estadio": "SoFi Stadium", "data_hora": "2026-06-19T15:00:00Z"},
    {"time_a": "Grécia", "sigla_a": "GR", "time_b": "Áustria", "sigla_b": "AT", "grupo": "H", "rodada": 2, "estadio": "SoFi Stadium", "data_hora": "2026-06-21T18:00:00Z"},
    {"time_a": "Equador", "sigla_a": "EC", "time_b": "Grécia", "sigla_b": "GR", "grupo": "H", "rodada": 2, "estadio": "Arrowhead", "data_hora": "2026-06-22T15:00:00Z"},
    {"time_a": "Hungria", "sigla_a": "HU", "time_b": "Suécia", "sigla_b": "SE", "grupo": "H", "rodada": 2, "estadio": "MetLife", "data_hora": "2026-06-22T18:00:00Z"},

    # GRUPO I
    {"time_a": "Croácia", "sigla_a": "HR", "time_b": "Tailândia", "sigla_b": "TH", "grupo": "I", "rodada": 1, "estadio": "974", "data_hora": "2026-06-19T18:00:00Z"},
    {"time_a": "Argélia", "sigla_a": "DZ", "time_b": "Nigéria", "sigla_b": "NG", "grupo": "I", "rodada": 1, "estadio": "Akron", "data_hora": "2026-06-20T18:00:00Z"},
    {"time_a": "Turquia", "sigla_a": "TR", "time_b": "Vietnã", "sigla_b": "VN", "grupo": "I", "rodada": 1, "estadio": "Education City", "data_hora": "2026-06-21T15:00:00Z"},
    {"time_a": "Nigéria", "sigla_a": "NG", "time_b": "Turquia", "sigla_b": "TR", "grupo": "I", "rodada": 2, "estadio": "SoFi Stadium", "data_hora": "2026-06-22T18:00:00Z"},
    {"time_a": "Vietnã", "sigla_a": "VN", "time_b": "Nigéria", "sigla_b": "NG", "grupo": "I", "rodada": 2, "estadio": "Lusail", "data_hora": "2026-06-23T15:00:00Z"},
    {"time_a": "Croácia", "sigla_a": "HR", "time_b": "Argélia", "sigla_b": "DZ", "grupo": "I", "rodada": 2, "estadio": "Arrowhead", "data_hora": "2026-06-23T18:00:00Z"},

    # GRUPO J
    {"time_a": "Irã", "sigla_a": "IR", "time_b": "Egito", "sigla_b": "EG", "grupo": "J", "rodada": 1, "estadio": "Lusail", "data_hora": "2026-06-19T21:00:00Z"},
    {"time_a": "Islândia", "sigla_a": "IS", "time_b": "Bielorrúsia", "sigla_b": "BY", "grupo": "J", "rodada": 1, "estadio": "MetLife", "data_hora": "2026-06-20T21:00:00Z"},
    {"time_a": "Espanha", "sigla_a": "ES", "time_b": "Uruguai", "sigla_b": "UY", "grupo": "J", "rodada": 1, "estadio": "SoFi Stadium", "data_hora": "2026-06-21T21:00:00Z"},
    {"time_a": "Bielorrúsia", "sigla_a": "BY", "time_b": "Espanha", "sigla_b": "ES", "grupo": "J", "rodada": 2, "estadio": "Arrowhead", "data_hora": "2026-06-23T18:00:00Z"},
    {"time_a": "Egito", "sigla_a": "EG", "time_b": "Bielorrúsia", "sigla_b": "BY", "grupo": "J", "rodada": 2, "estadio": "Education City", "data_hora": "2026-06-24T15:00:00Z"},
    {"time_a": "Irã", "sigla_a": "IR", "time_b": "Islândia", "sigla_b": "IS", "grupo": "J", "rodada": 2, "estadio": "974", "data_hora": "2026-06-24T18:00:00Z"},

    # GRUPO K
    {"time_a": "Noruega", "sigla_a": "NO", "time_b": "Geórgia", "sigla_b": "GE", "grupo": "K", "rodada": 1, "estadio": "Azteca", "data_hora": "2026-06-21T21:00:00Z"},
    {"time_a": "Camarões", "sigla_a": "CM", "time_b": "Arábia Saudita", "sigla_b": "SA", "grupo": "K", "rodada": 1, "estadio": "Akron", "data_hora": "2026-06-20T15:00:00Z"},
    {"time_a": "Tailândia", "sigla_a": "TH", "time_b": "Benin", "sigla_b": "BJ", "grupo": "K", "rodada": 1, "estadio": "Education City", "data_hora": "2026-06-22T21:00:00Z"},
    {"time_a": "Benin", "sigla_a": "BJ", "time_b": "Noruega", "sigla_b": "NO", "grupo": "K", "rodada": 2, "estadio": "MetLife", "data_hora": "2026-06-24T18:00:00Z"},
    {"time_a": "Arábia Saudita", "sigla_a": "SA", "time_b": "Tailândia", "sigla_b": "TH", "grupo": "K", "rodada": 2, "estadio": "SoFi Stadium", "data_hora": "2026-06-25T15:00:00Z"},
    {"time_a": "Camarões", "sigla_a": "CM", "time_b": "Geórgia", "sigla_b": "GE", "grupo": "K", "rodada": 2, "estadio": "Arrowhead", "data_hora": "2026-06-25T18:00:00Z"},

    # GRUPO L
    {"time_a": "França", "sigla_a": "FR", "time_b": "Colômbia", "sigla_b": "CO", "grupo": "L", "rodada": 1, "estadio": "SoFi Stadium", "data_hora": "2026-06-22T21:00:00Z"},
    {"time_a": "Marrocos", "sigla_a": "MA", "time_b": "Canadá", "sigla_b": "CA", "grupo": "L", "rodada": 1, "estadio": "MetLife", "data_hora": "2026-06-23T21:00:00Z"},
    {"time_a": "Emirados Árabes Unidos", "sigla_a": "AE", "time_b": "Vietnã", "sigla_b": "VN", "grupo": "L", "rodada": 1, "estadio": "Lusail", "data_hora": "2026-06-24T21:00:00Z"},
    {"time_a": "Vietnã", "sigla_a": "VN", "time_b": "Colômbia", "sigla_b": "CO", "grupo": "L", "rodada": 2, "estadio": "Akron", "data_hora": "2026-06-25T18:00:00Z"},
    {"time_a": "Canadá", "sigla_a": "CA", "time_b": "Emirados Árabes Unidos", "sigla_b": "AE", "grupo": "L", "rodada": 2, "estadio": "Education City", "data_hora": "2026-06-26T15:00:00Z"},
    {"time_a": "França", "sigla_a": "FR", "time_b": "Marrocos", "sigla_b": "MA", "grupo": "L", "rodada": 2, "estadio": "Arrowhead", "data_hora": "2026-06-26T18:00:00Z"},
]

# Primeiro, deleta todos os jogos antigos
try:
    supabase.table("partidas").delete().neq('id', -1).execute()
    print("🗑️ Jogos antigos removidos")
except:
    print("⚠️ Não foi possível remover jogos antigos (pode não existir dados)")

# Insere todos os 72 jogos
count = 0
for jogo in jogos:
    try:
        supabase.table("partidas").insert(jogo).execute()
        count += 1
    except Exception as e:
        print(f"❌ Erro ao inserir {jogo}: {e}")

print(f"✅ {count} jogos sincronizados com sucesso! Total: {len(jogos)}")