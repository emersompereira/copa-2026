'use client'
import { createClient } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

export default function Admin() {
    const router = useRouter()
    const [jogos, setJogos] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [updatingId, setUpdatingId] = useState<number | null>(null)
    const [loggingOut, setLoggingOut] = useState(false)

    const fetchJogos = async () => {
        const { data } = await supabase.from('partidas').select('*').order('data_hora', { ascending: true })
        if (data) setJogos(data)
        setLoading(false)
    }

    useEffect(() => {
        fetchJogos()
    }, [])

    const handleLogout = async () => {
        setLoggingOut(true)
        try {
            await fetch('/api/admin/logout', { method: 'POST' })
            router.push('/admin/login')
        } catch (err) {
            alert('Erro ao fazer logout')
            setLoggingOut(false)
        }
    }

    const handlePlacarChange = (id: number, field: 'gols_a' | 'gols_b', value: string) => {
        const val = value === '' ? 0 : parseInt(value)
        setJogos(prev => prev.map(j => j.id === id ? { ...j, [field]: val } : j))
    }

    const atualizarPlacar = async (id: number, gA: number, gB: number) => {
        setUpdatingId(id)
        const { error } = await supabase
            .from('partidas')
            .update({ 
                gols_a: gA, 
                gols_b: gB, 
                status: 'encerrado' 
            })
            .eq('id', id)
        
        if (error) {
            alert("❌ Erro SRE-01: Falha na persistência: " + error.message)
        } else {
            alert("✅ STATUS: Jogo encerrado e placar sincronizado!")
            fetchJogos() // Atualiza a lista
        }
        setUpdatingId(null)
    }

    if (loading) return (
        <div className="min-h-screen bg-black text-yellow-500 flex items-center justify-center font-mono uppercase">
            [SYS]: Acessando Nível de Segurança 0...
        </div>
    )

    return (
        <main className="min-h-screen bg-gray-950 text-white p-4 md:p-8">
            <header className="max-w-2xl mx-auto mb-12 border-b border-red-900 pb-4 flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-black text-red-600 italic uppercase tracking-tighter">
                        Terminal do Comissário
                    </h1>
                    <p className="text-[10px] font-mono text-gray-500 mt-2 uppercase tracking-[0.3em]">
                        Controle de Resultados Oficiais • Copa 2026
                    </p>
                </div>
                <button 
                    onClick={handleLogout}
                    disabled={loggingOut}
                    className="bg-red-600 hover:bg-red-500 disabled:bg-gray-800 disabled:text-gray-600 text-white font-black text-[10px] px-4 py-2 rounded-lg uppercase tracking-widest transition-all"
                >
                    {loggingOut ? 'DESCONECTANDO...' : 'SAIR'}
                </button>
            </header>
            
            <div className="max-w-2xl mx-auto space-y-3">
                {jogos.map(jogo => (
                    <div key={jogo.id} className="bg-gray-900/80 border border-gray-800 p-4 rounded-2xl flex items-center justify-between hover:border-red-900/50 transition-all">
                        <div className="w-1/3 text-right">
                            <span className="text-sm font-black uppercase">{jogo.time_a}</span>
                        </div>

                        <div className="flex items-center gap-2 px-4">
                            <input 
                                type="number" 
                                value={jogo.gols_a ?? 0}
                                onChange={(e) => handlePlacarChange(jogo.id, 'gols_a', e.target.value)}
                                className="w-12 h-10 bg-black border border-gray-700 text-center rounded-lg font-bold text-yellow-500 focus:border-red-500 outline-none"
                            />
                            <span className="text-gray-600 font-black text-[10px]">X</span>
                            <input 
                                type="number" 
                                value={jogo.gols_b ?? 0}
                                onChange={(e) => handlePlacarChange(jogo.id, 'gols_b', e.target.value)}
                                className="w-12 h-10 bg-black border border-gray-700 text-center rounded-lg font-bold text-yellow-500 focus:border-red-500 outline-none"
                            />
                        </div>

                        <div className="w-1/3 flex items-center justify-between">
                            <span className="text-sm font-black uppercase">{jogo.time_b}</span>
                            <button 
                                onClick={() => atualizarPlacar(jogo.id, jogo.gols_a, jogo.gols_b)}
                                disabled={updatingId === jogo.id}
                                className={`ml-4 px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${
                                    updatingId === jogo.id 
                                    ? 'bg-gray-800 text-gray-600' 
                                    : 'bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-900/20'
                                }`}
                            >
                                {updatingId === jogo.id ? '...' : 'Gravar'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center">
                <a href="/ranking" className="text-gray-600 hover:text-white text-[10px] font-mono uppercase tracking-[0.4em] transition-all">
                    [ Voltar para o Leaderboard ]
                </a>
            </div>
        </main>
    )
}