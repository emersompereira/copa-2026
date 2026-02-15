'use client'
import { createClient } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

export default function Admin() {
    const [jogos, setJogos] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchJogos = async () => {
            const { data } = await supabase.from('partidas').select('*').order('data_hora', { ascending: true })
            if (data) setJogos(data)
            setLoading(false)
        }
        fetchJogos()
    }, [])

    const atualizarPlacar = async (id: number, gA: number, gB: number) => {
        const { error } = await supabase
            .from('partidas')
            .update({ gols_a: gA, gols_b: gB, status: 'encerrado' })
            .eq('id', id)
        
        if (error) alert("Erro ao atualizar: " + error.message)
        else alert("Placar Oficial Atualizado!")
    }

    if (loading) return <div className="p-8 text-white font-mono">Carregando painel de controle...</div>

    return (
        <main className="min-h-screen bg-black text-white p-8">
            <h1 className="text-2xl font-black text-red-500 mb-8 uppercase tracking-tighter">
                🛡️ Painel do Comissário (Admin)
            </h1>
            
            <div className="max-w-2xl mx-auto space-y-4">
                {jogos.map(jogo => (
                    <div key={jogo.id} className="bg-gray-900 p-4 rounded-xl border border-gray-800 flex items-center justify-between">
                        <span className="w-1/3 text-right font-bold">{jogo.time_a}</span>
                        <div className="flex gap-2">
                            <input 
                                type="number" 
                                defaultValue={jogo.gols_a ?? 0}
                                id={`gA-${jogo.id}`}
                                className="w-12 bg-gray-800 text-center rounded p-1"
                            />
                            <input 
                                type="number" 
                                defaultValue={jogo.gols_b ?? 0}
                                id={`gB-${jogo.id}`}
                                className="w-12 bg-gray-800 text-center rounded p-1"
                            />
                        </div>
                        <span className="w-1/3 text-left font-bold">{jogo.time_b}</span>
                        <button 
                            onClick={() => {
                                const gA = (document.getElementById(`gA-${jogo.id}`) as HTMLInputElement).value
                                const gB = (document.getElementById(`gB-${jogo.id}`) as HTMLInputElement).value
                                atualizarPlacar(jogo.id, parseInt(gA), parseInt(gB))
                            }}
                            className="ml-4 bg-blue-600 hover:bg-blue-500 text-xs px-3 py-2 rounded font-bold uppercase"
                        >
                            Salvar
                        </button>
                    </div>
                ))}
            </div>
            <div className="mt-8 text-center">
                <a href="/ranking" className="text-gray-500 underline text-xs">Ir para o Ranking</a>
            </div>
        </main>
    )
}
