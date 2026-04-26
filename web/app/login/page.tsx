'use client'

import { createClient } from '@supabase/supabase-js'
import { useState } from 'react'

// Inicialização do cliente Supabase usando as variáveis de ambiente
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function Login() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          // Garante que o usuário volte para a URL atual (localhost ou Vercel)
          emailRedirectTo: typeof window !== 'undefined' ? window.location.origin : '',
        },
      })

      if (error) {
        setMessage(`❌ Erro: ${error.message}`)
      } else {
        setMessage('📩 Sucesso! Verifique seu e-mail para clicar no link de acesso.')
      }
    } catch (err) {
      setMessage('❌ Ocorreu um erro inesperado.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="max-w-md mx-auto my-10 p-6 bg-gray-800 rounded-2xl border border-gray-700 shadow-2xl">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-black text-yellow-400 uppercase tracking-tighter">
          Área do Apostador
        </h2>
        <p className="text-gray-400 text-sm mt-1">
          Entre com seu e-mail para palpitar
        </p>
      </div>

      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-gray-500 uppercase mb-1 ml-1">
            E-mail Institucional ou Pessoal
          </label>
          <input
            id="email"
            type="email"
            placeholder="seu@email.com"
            className="w-full bg-gray-900 border border-gray-600 p-3 rounded-lg text-white focus:ring-2 focus:ring-yellow-500 outline-none transition-all placeholder:text-gray-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button
          disabled={loading}
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-700 disabled:text-gray-500 text-black font-bold py-3 rounded-lg transition-all transform active:scale-95 shadow-lg"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              PROCESSANDO...
            </span>
          ) : (
            'RECEBER LINK DE ACESSO'
          )}
        </button>
      </form>

      {message && (
        <div className={`mt-6 p-3 rounded border text-center text-sm font-mono ${
          message.includes('❌') 
            ? 'bg-red-900/20 border-red-500/50 text-red-400' 
            : 'bg-green-900/20 border-green-500/50 text-green-400'
        }`}>
          {message}
        </div>
      )}

      <p className="mt-6 text-[10px] text-center text-gray-500 uppercase tracking-widest">
        Sistema de Autenticação Supabase OTP
      </p>
    </section>
  )
}
