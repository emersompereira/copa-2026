import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json()

    const adminUsername = process.env.ADMIN_USERNAME
    const adminPassword = process.env.ADMIN_PASSWORD
    const adminSecret = process.env.ADMIN_SECRET

    // Validar credenciais
    if (username === adminUsername && password === adminPassword) {
      const response = NextResponse.json({ success: true, message: 'Login bem-sucedido' })

      // Criar um cookie de sessão simples
      response.cookies.set('admin_token', adminSecret, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24, // 24 horas
        path: '/',
      })

      return response
    }

    return NextResponse.json(
      { message: 'Usuário ou senha inválidos' },
      { status: 401 }
    )
  } catch (error) {
    return NextResponse.json(
      { message: 'Erro no servidor' },
      { status: 500 }
    )
  }
}
