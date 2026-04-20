'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })

      const data = await res.json()

      if (res.ok) {
        router.push('/admin')
      } else {
        setError(data.message || 'Credenciais inválidas')
      }
    } catch (err) {
      setError('Erro ao conectar ao servidor')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-2xl">
        <h1 className="text-3xl font-black text-yellow-500 text-center mb-2 uppercase tracking-tighter">
          Painel Admin
        </h1>
        <p className="text-gray-400 text-center text-sm mb-8">Acesso restrito</p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase mb-2 ml-1">
              Usuário
            </label>
            <input
              type="text"
              placeholder="admin"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 p-3 rounded-lg text-white focus:ring-2 focus:ring-yellow-500 outline-none transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase mb-2 ml-1">
              Senha
            </label>
            <input
              type="password"
              placeholder="••••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 p-3 rounded-lg text-white focus:ring-2 focus:ring-yellow-500 outline-none transition-all"
              required
            />
          </div>

          {error && (
            <div className="bg-red-900/20 border border-red-500/50 text-red-400 p-3 rounded text-sm text-center">
              ❌ {error}
            </div>
          )}

          <button
            disabled={loading}
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-700 disabled:text-gray-500 text-black font-bold py-3 rounded-lg transition-all uppercase tracking-widest shadow-lg active:scale-95"
          >
            {loading ? 'VERIFICANDO...' : 'ENTRAR'}
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-gray-800">
          <a href="/" className="text-gray-500 hover:text-white text-xs uppercase tracking-widest text-center block transition">
            ← Voltar para home
          </a>
        </div>
      </div>
    </main>
  )
}
