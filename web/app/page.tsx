'use client'
import { createClient } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

export default function Home() {
  const [jogos, setJogos] = useState<any[]>([])
  const [palpites, setPalpites] = useState<any>({})
  const [user, setUser] = useState<any>(null)
  const [rodadasAtuais, setRodadasAtuais] = useState<{ [key: string]: number }>({})
  const [salvando, setSalvando] = useState(false)
  const [mensagem, setMensagem] = useState<string>('')

  useEffect(() => {
    const carregarDados = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setUser(session?.user ?? null)

      const { data: matches } = await supabase.from('partidas').select('*').order('data_hora')
      if (matches) {
        setJogos(matches)
        // Inicializa cada grupo na rodada 1
        const gruposUnicos = Array.from(new Set(matches.map(j => j.grupo)))
        const inicial: any = {}
        gruposUnicos.forEach(g => inicial[g as string] = 1)
        setRodadasAtuais(inicial)
      }

      if (session?.user) {
        const { data: bets } = await supabase.from('palpites').select('*').eq('user_id', session.user.id)
        const betsObj: any = {}
        bets?.forEach(b => betsObj[b.partida_id] = { gA: b.gols_a, gB: b.gols_b })
        setPalpites(betsObj)
      }
    }
    carregarDados()
  }, [])

  const salvarTodosPalpites = async () => {
    if (!user) return setMensagem("❌ Faça login para salvar!")
    
    const palpitesParaSalvar = Object.entries(palpites).filter(([_, p]: [string, any]) => p?.gA !== undefined && p?.gB !== undefined)
    
    if (palpitesParaSalvar.length === 0) {
      return setMensagem("❌ Nenhum palpite preenchido para salvar!")
    }

    setSalvando(true)
    
    try {
      const promessas = palpitesParaSalvar.map(([partidaId, p]: [string, any]) => 
        supabase.from('palpites').upsert({
          user_id: user.id,
          partida_id: parseInt(partidaId),
          gols_a: p.gA,
          gols_b: p.gB
        }, { onConflict: 'user_id,partida_id' })
      )
      
      const resultados = await Promise.all(promessas)
      const temErro = resultados.some(r => r.error)
      
      setSalvando(false)
      
      if (temErro) {
        setMensagem(`❌ Erro ao salvar alguns palpites`)
      } else {
        setMensagem(`✅ ${palpitesParaSalvar.length} palpite(s) salvo(s) com sucesso!`)
        setTimeout(() => setMensagem(''), 4000)
      }
    } catch (err) {
      setSalvando(false)
      setMensagem("❌ Erro ao salvar: " + (err as any).message)
    }
  }

  const formatarData = (iso: string) => {
    const d = new Date(iso)
    const dia = d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' })
    const semana = d.toLocaleDateString('pt-BR', { weekday: 'long' }).split('-')[0]
    const hora = d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    return { dia, semana, hora }
  }

  const verificarStatusJogo = (jogo: any) => {
    const agora = new Date()
    const dataPartida = new Date(jogo.data_hora)
    const minutosFaltando = (dataPartida.getTime() - agora.getTime()) / (1000 * 60)

    // Jogo já encerrado
    if (jogo.status === 'encerrado') {
      return { bloqueado: true, motivo: 'encerrado' }
    }

    // Faltam menos de 30 minutos para começar
    if (minutosFaltando <= 30 && minutosFaltando > 0) {
      return { bloqueado: true, motivo: 'proximo' }
    }

    // Jogo já começou 
    if (minutosFaltando <= 0) {
      return { bloqueado: true, motivo: 'em-andamento' }
    }

    return { bloqueado: false, motivo: null }
  }

  const getMensagemBloqueio = (motivo: string) => {
    const msgs: { [key: string]: string } = {
      'encerrado': '🔒 Jogo encerrado',
      'proximo': '🔒 Jogo iniciando em breve',
      'em-andamento': '🔒 Jogo em andamento'
    }
    return msgs[motivo] || '🔒 Bloqueado'
  }

  // Agrupar jogos por Grupo
  const grupos = jogos.reduce((acc: any, jogo) => {
    if (!acc[jogo.grupo]) acc[jogo.grupo] = []
    acc[jogo.grupo].push(jogo)
    return acc
  }, {})

  return (
    <main className="min-h-screen bg-black text-white p-4 font-sans">
      <header className="max-w-6xl mx-auto flex justify-between items-center mb-10">
        <h1 className="text-3xl font-black italic text-yellow-500 uppercase">Bolão 2026</h1>
        <div className="flex gap-4">
          <a href="/ranking" className="text-xs font-bold uppercase tracking-widest hover:text-yellow-500 transition">Ranking</a>
          {user ? <span className="text-[10px] text-gray-500">{user.email}</span> : <a href="/login" className="bg-yellow-500 text-black px-4 py-1 rounded-full font-bold text-xs">Login</a>}
        </div>
      </header>
      {/* Feedback de Salvamento */}
      {mensagem && (
        <div className="max-w-6xl mx-auto mb-4 p-3 rounded-lg text-center font-bold text-sm" style={{backgroundColor: mensagem.includes('✅') ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)', color: mensagem.includes('✅') ? '#22c55e' : '#ef4444'}}>
          {mensagem}
        </div>
      )}

      {/* Botão de Salvar Global */}
      {user && Object.keys(palpites).length > 0 && (
        <div className="max-w-6xl mx-auto mb-8 flex justify-center">
          <button
            onClick={salvarTodosPalpites}
            disabled={salvando}
            className="bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed text-black font-black py-3 px-8 rounded-xl transition-all text-sm uppercase tracking-widest shadow-lg"
          >
            {salvando ? '💾 SALVANDO...' : '💾 SALVAR TODOS OS PALPITES'}
          </button>
        </div>
      )}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.keys(grupos).sort().map(nomeGrupo => {
          const rodadaAtiva = rodadasAtuais[nomeGrupo] || 1
          const jogosDaRodada = grupos[nomeGrupo].filter((j: any) => j.rodada === rodadaAtiva)

          return (
            <div key={nomeGrupo} className="bg-[#121212] rounded-3xl border border-gray-800 overflow-hidden shadow-2xl">
              {/* Header do Grupo */}
              <div className="bg-gradient-to-r from-gray-900 to-black p-4 border-b border-gray-800">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-black uppercase text-gray-400">Grupo {nomeGrupo}</h2>
                </div>
                
                {/* Navegador de Rodadas */}
                <div className="flex justify-between items-center bg-black/50 rounded-lg p-2">
                  <button 
                    onClick={() => setRodadasAtuais(prev => ({...prev, [nomeGrupo]: Math.max(1, rodadaAtiva - 1)}))}
                    className="p-1 hover:text-yellow-500 transition"
                  > ◀ </button>
                  <span className="text-[10px] font-black uppercase tracking-widest text-yellow-500">{rodadaAtiva}ª RODADA</span>
                  <button 
                    onClick={() => setRodadasAtuais(prev => ({...prev, [nomeGrupo]: Math.min(3, rodadaAtiva + 1)}))}
                    className="p-1 hover:text-yellow-500 transition"
                  > ▶ </button>
                </div>
              </div>

              {/* Lista de Jogos */}
              <div className="divide-y divide-gray-800">
                {jogosDaRodada.map((jogo: any) => {
                  const { dia, semana, hora } = formatarData(jogo.data_hora)
                  const { bloqueado, motivo } = verificarStatusJogo(jogo)
                  return (
                    <div key={jogo.id} className="p-6 space-y-4 hover:bg-white/[0.02] transition">
                      {/* Info do Jogo */}
                      <div className="text-center text-[10px] text-gray-500 uppercase tracking-tighter">
                        <span className="font-bold text-gray-400">{jogo.estadio}</span> • {dia} • {semana} • {hora}
                      </div>

                        {/* Placar */}
                      <div className="flex flex-col gap-3">
                        {/* Container principal dividido em 3 partes: Time A (flex-1) | Placar (shrink-0) | Time B (flex-1) */}
                        <div className="flex items-center justify-between w-full gap-2">
                          
                          {/* Time A + Flag A */}
                          <div className="flex items-center justify-end gap-2 flex-1 min-w-0">
                            <span className="text-[10px] sm:text-xs font-black uppercase text-right leading-tight">{jogo.time_a}</span>
                            <img src={`https://flagcdn.com/w40/${jogo.sigla_a.toLowerCase()}.png`} className="w-6 h-4 object-cover rounded-sm shadow-sm shrink-0" alt="" />
                          </div>

                          {/* Bloco Central: Inputs e Placar Oficial */}
                          <div className="flex items-center justify-center gap-1 sm:gap-2 shrink-0">
                            {/* Input A */}
                            <input 
                              type="text"
                              inputMode="numeric"
                              disabled={bloqueado}
                              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl text-center font-black text-lg sm:text-xl placeholder-gray-600 outline-none transition-all shrink-0 ${
                                bloqueado 
                                ? 'bg-gray-700 text-gray-500 cursor-not-allowed border border-red-900/30' 
                                : 'bg-gray-800 text-white focus:ring-2 ring-yellow-500'
                              }`}
                              value={palpites[jogo.id]?.gA ?? ''}
                              onChange={(e) => {
                                if (!bloqueado) {
                                  const value = e.target.value.replace(/[^0-9]/g, '')
                                  const numVal = value ? Math.min(99, parseInt(value)) : ''
                                  setPalpites({...palpites, [jogo.id]: { ...palpites[jogo.id], gA: numVal === '' ? undefined : numVal }})
                                }
                              }}
                              onBlur={(e) => {
                                if (e.target.value === '') {
                                  setPalpites({...palpites, [jogo.id]: { ...palpites[jogo.id], gA: undefined }})
                                }
                              }}
                              placeholder="0"
                              maxLength={2}
                            />

                            {/* Placar Oficial A */}
                            {bloqueado && jogo.status === 'encerrado' && jogo.gols_a !== null && jogo.gols_a !== undefined && (
                              <span className="text-xs sm:text-sm font-black text-yellow-500 shrink-0">{jogo.gols_a}</span>
                            )}

                            {/* Separador X */}
                            <span className="text-gray-700 font-black text-sm sm:text-lg shrink-0 mx-1">X</span>

                            {/* Placar Oficial B */}
                            {bloqueado && jogo.status === 'encerrado' && jogo.gols_b !== null && jogo.gols_b !== undefined && (
                              <span className="text-xs sm:text-sm font-black text-yellow-500 shrink-0">{jogo.gols_b}</span>
                            )}

                            {/* Input B */}
                            <input 
                              type="text"
                              inputMode="numeric"
                              disabled={bloqueado}
                              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl text-center font-black text-lg sm:text-xl placeholder-gray-600 outline-none transition-all shrink-0 ${
                                bloqueado 
                                ? 'bg-gray-700 text-gray-500 cursor-not-allowed border border-red-900/30' 
                                : 'bg-gray-800 text-white focus:ring-2 ring-yellow-500'
                              }`}
                              value={palpites[jogo.id]?.gB ?? ''}
                              onChange={(e) => {
                                if (!bloqueado) {
                                  const value = e.target.value.replace(/[^0-9]/g, '')
                                  const numVal = value ? Math.min(99, parseInt(value)) : ''
                                  setPalpites({...palpites, [jogo.id]: { ...palpites[jogo.id], gB: numVal === '' ? undefined : numVal }})
                                }
                              }}
                              onBlur={(e) => {
                                if (e.target.value === '') {
                                  setPalpites({...palpites, [jogo.id]: { ...palpites[jogo.id], gB: undefined }})
                                }
                              }}
                              placeholder="0"
                              maxLength={2}
                            />
                          </div>

                          {/* Flag B + Time B */}
                          <div className="flex items-center justify-start gap-2 flex-1 min-w-0">
                            <img src={`https://flagcdn.com/w40/${jogo.sigla_b.toLowerCase()}.png`} className="w-6 h-4 object-cover rounded-sm shadow-sm shrink-0" alt="" />
                            <span className="text-[10px] sm:text-xs font-black uppercase text-left leading-tight">{jogo.time_b}</span>
                          </div>
                        </div>

                        {/* Status do Jogo */}
                        {bloqueado && (
                          <div className="text-center text-xs font-bold rounded-lg py-2 px-3" style={{
                            backgroundColor: jogo.status === 'encerrado' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                            color: jogo.status === 'encerrado' ? '#ef4444' : '#f59e0b'
                          }}>
                            {getMensagemBloqueio(motivo || '')}
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </main>
  )
}