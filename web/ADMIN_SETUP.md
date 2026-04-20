# 🔐 Configuração de Admin - Bolão Copa 2026

## Credenciais Admin
- **Usuário:** `admin`
- **Senha:** `9ed9c7452664`
- **URL de Login:** `http://localhost:3000/admin/login`

## Como Funciona

### Para Usuários Normais (Home)
1. Acessam `http://localhost:3000`
2. Inserem apenas o **e-mail**
3. Recebem um **link mágico no e-mail**
4. Clicam no link para fazer login automaticamente
5. Conseguem fazer palpites

### Para o Admin (/admin)
1. Acessa `http://localhost:3000/admin/login`
2. Insere **username: `admin`**
3. Insere **senha: `9ed9c7452664`**
4. Sistema cria um cookie de sessão válido por 24 horas
5. Admin pode controlar os placares no painel
6. Botão **SAIR** faz logout e limpa o cookie

## Fluxo de Autenticação

```
USUÁRIOS NORMAIS:
Home → Email → OTP (link mágico) → Autenticado no Supabase → Pode fazer palpites

ADMIN:
/admin/login → Username + Senha → API valida → Cookie criado → Acesso a /admin → Controlar placares
```

## Sistema de Proteção

- **Middleware:** Verifica cookie `admin_token` em requisições para `/admin`
- **Se não tiver token válido:** Redireciona para `/admin/login`
- **Se tiver token:** Deixa passar normalmente
- **Cookie expira em:** 24 horas

## Variáveis de Ambiente (.env.local)

```
ADMIN_USERNAME=admin
ADMIN_PASSWORD=9ed9c7452664
ADMIN_SECRET=copa2026bolao123
```

Tudo pronto! 🚀
