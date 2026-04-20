import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const response = NextResponse.json({ success: true })

  // Remover o cookie de sessão admin
  response.cookies.delete('admin_token')

  return response
}
