## PRÓXIMOS PASSOS - Copa 2026 Corrigida

### 1️⃣ EXECUTAR NO SUPABASE (SQL Editor)

Copie e colar o conteúdo de: `insert_jogos_oficial_2026.sql`

**Isso vai:**
- ✅ Deletar os jogos antigos (com grupos errados)
- ✅ Inserir os 72 jogos CORRETOS do sorteio oficial
- ✅ Com distribuição correta: 2 jogos por rodada, em 3 rodadas por grupo

---

### 2️⃣ O QUE FOI CORRIGIDO

**Grupos Corrigidos:**
- **Grupo A:** México, África do Sul, Coreia do Sul, República Checa
- **Grupo B:** Canadá, Bósnia e Herzegovina, Qatar, Suíça
- **Grupo C:** Brasil, Marrocos, Haiti, Escócia
- **Grupo D:** EUA, Paraguai, Austrália, Turquia
- **Grupo E:** Alemanha, Curaçau, Costa do Marfim, Equador
- **Grupo F:** Holanda, Japão, Suécia, Tunísia
- **Grupo G:** Bélgica, Egito, Irã, Nova Zelândia
- **Grupo H:** Espanha, Cabo Verde, Arábia Saudita, Uruguai
- **Grupo I:** França, Senegal, Iraque, Noruega
- **Grupo J:** Argentina, Argélia, Áustria, Jordânia
- **Grupo K:** Portugal, RD Congo, Uzbequistão, Colômbia
- **Grupo L:** Inglaterra, Croácia, Gana, Panamá

**Frontend Corrigido:**
- ✅ Agora mostra os **NOMES COMPLETOS** das seleções (não mais siglas)
- ✅ As **BANDEIRAS continuam funcionando normalmente** (usam as siglas ISO 2D)
- ✅ Interface mais legível e profissional

---

### 3️⃣ VERIFICAÇÃO PÓS-EXECUÇÃO

Após rodar o SQL no Supabase:
1. Recarregue o browser (`localhost:3000`)
2. Navegue pelas rodadas com as setas ◀ ▶
3. Verifique: 2 jogos por rodada × 3 rodadas = 6 jogos por grupo ✓
4. Todos os nomes dos países devem aparecer completos ✓
5. As bandeiras devem estar visualizando corretamente ✓

Qualquer problema, avise! 🎯
