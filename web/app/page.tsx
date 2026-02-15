'use client'

import { createClient } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'
import Login from './login'

// Inicialização do Cliente Supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

// Tipagem dos Dados
type Jogo = {
  id: number
  time_a: string
  time_b: string
  data_hora: string
  status: string
  gols_a: number | null
  gols_b: number | null
}

type PalpiteMapa = Record<number, { gols_a: number; gols_b: number }>

export default function Home() {
  const [user, setUser] = useState<any>(null)
  const [jogos, setJogos] = useState<Jogo[]>([])
  const [palpites, setPalpites] = useState<PalpiteMapa>({})
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    const inicializarSistema = async () => {
      // 1. Verificar Usuário
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
      
      // 2. Buscar Jogos
      const { data: partidasData } = await supabase
        .from('partidas')
        .select('*')
        .order('data_hora', { ascending: true })
      
      if (partidasData) setJogos(partidasData)

      // 3. Buscar Palpites do Usuário
      if (user) {
        const { data: palpitesData } = await supabase
          .from('palpites')
          .select('*')
          .eq('user_id', user.id)

        if (palpitesData) {
          const mapa: PalpiteMapa = {}
          palpitesData.forEach(p => {
            mapa[p.partida_id] = { gols_a: p.gols_a, gols_b: p.gols_b }
          })
          setPalpites(mapa)
        }
      }
      setLoading(false)
    }

    inicializarSistema()

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null)
      if (event === 'SIGNED_OUT') setPalpites({})
    })

    return () => authListener.subscription.unsubscribe()
  }, [])

  const handleInputChange = (partidaId: number, time: 'a' | 'b', valor: string) => {
    const num = valor === '' ? 0 : parseInt(valor)
    setPalpites(prev => ({
      ...prev,
      [partidaId]: {
        ...(prev[partidaId] || { gols_a: 0, gols_b: 0 }),
        [time === 'a' ? 'gols_a' : 'gols_b']: num
      }
    }))
  }

  const salvarPalpites = async () => {
    if (!user) return
    setSaving(true)

    const dadosParaSalvar = Object.entries(palpites).map(([partidaId, scores]) => ({
      user_id: user.id,
      partida_id: parseInt(partidaId),
      gols_a: scores.gols_a,
      gols_b: scores.gols_b
    }))

    const { error } = await supabase
      .from('palpites')
      .upsert(dadosParaSalvar, { onConflict: 'user_id,partida_id' })

    if (error) alert("Erro ao salvar: " + error.message)
    else alert("✅ Palpites salvos com sucesso!")
    
    setSaving(false)
  }

  if (loading) return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center font-mono uppercase tracking-tighter">
      [SRE]: Sincronizando Banco de Dados...
    </div>
  )

  return (
    <main className="min-h-screen bg-gray-950 text-white p-4 md:p-8">
      {/* HEADER PRINCIPAL */}
      <header className="max-w-4xl mx-auto mb-12 flex flex-col items-center">
        <h1 className="text-5xl font-black text-yellow-500 italic uppercase tracking-tighter mb-6 drop-shadow-[0_0_15px_rgba(234,179,8,0.3)]">
          Copa 2026
        </h1>

        {/* NAVBAR DE NAVEGAÇÃO */}
        <nav className="flex gap-8 mb-8 border-b border-gray-800 pb-2 w-full justify-center">
          <a href="/" className="text-yellow-500 font-bold uppercase text-xs tracking-[0.2em] border-b-2 border-yellow-500 pb-2">
            Meus Palpites
          </a>
          <a href="/ranking" className="text-gray-500 hover:text-white font-bold uppercase text-xs tracking-[0.2em] transition-all">
            Ranking Geral
          </a>
        </nav>

        {/* STATUS DO USUÁRIO */}
        {user && (
          <div className="flex items-center gap-3 bg-gray-900 border border-gray-800 px-4 py-2 rounded-full shadow-inner">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">{user.email}</span>
            <button 
              onClick={() => supabase.auth.signOut()} 
              className="text-[10px] text-red-500 font-black hover:text-red-400 ml-2"
            >
              [ SAIR ]
            </button>
          </div>
        )}
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      {!user ? (
        <div className="max-w-md mx-auto">
          <Login />
        </div>
      ) : (
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="flex justify-between items-center px-2">
            <h2 className="text-gray-400 text-xs font-black uppercase tracking-widest">Tabela de Apostas</h2>
            <span className="text-[10px] text-gray-600 font-mono">ID: {user.id.slice(0,8)}</span>
          </div>

          <div className="grid gap-3">
            {jogos.map((jogo) => (
              <div 
                key={jogo.id} 
                className="bg-gray-900/50 border border-gray-800 p-5 rounded-2xl flex items-center justify-between hover:border-gray-600 transition-all group"
              >
                {/* TIME A */}
                <div className="w-1/3 text-right">
                   <p className="font-black text-sm md:text-base group-hover:text-yellow-500 transition-colors uppercase">{jogo.time_a}</p>
                </div>

                {/* INPUTS PLACAR */}
                <div className="flex items-center gap-2">
                  <input 
                    type="number" 
                    placeholder="0"
                    value={palpites[jogo.id]?.gols_a ?? ''}
                    onChange={(e) => handleInputChange(jogo.id, 'a', e.target.value)}
                    className="w-12 h-12 md:w-14 md:h-14 bg-black border-2 border-gray-800 rounded-xl text-center text-xl font-black focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all"
                  />
                  <span className="text-gray-700 font-black text-xs italic">VS</span>
                  <input 
                    type="number" 
                    placeholder="0"
                    value={palpites[jogo.id]?.gols_b ?? ''}
                    onChange={(e) => handleInputChange(jogo.id, 'b', e.target.value)}
                    className="w-12 h-12 md:w-14 md:h-14 bg-black border-2 border-gray-800 rounded-xl text-center text-xl font-black focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all"
                  />
                </div>

                {/* TIME B */}
                <div className="w-1/3 text-left">
                  <p className="font-black text-sm md:text-base group-hover:text-yellow-500 transition-colors uppercase">{jogo.time_b}</p>
                </div>
              </div>
            ))}
          </div>

          {/* BOTÃO SALVAR */}
          <button 
            onClick={salvarPalpites}
            disabled={saving || Object.keys(palpites).length === 0}
            className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest shadow-2xl transition-all active:scale-[0.98] ${
              saving 
                ? 'bg-gray-800 text-gray-600 cursor-not-allowed' 
                : 'bg-yellow-500 hover:bg-yellow-400 text-black shadow-yellow-500/10'
            }`}
          >
            {saving ? 'Gravando Dados...' : 'Salvar Palpites'}
          </button>
        </div>
      )}

      {/* FOOTER */}
      <footer className="mt-20 text-center opacity-20">
        <p className="text-[10px] font-mono tracking-[0.5em] uppercase">
          Bolão Copa 2026 • Sistema de Alta Disponibilidade
        </p>
      </footer>
    </main>
  )
}
