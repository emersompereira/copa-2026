'use client'
import { createClient } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

export default function Ranking() {
    const [lista, setLista] = useState<any[]>([])

    useEffect(() => {
        const getRanking = async () => {
            const { data } = await supabase.from('ranking').select('*')
            if (data) setLista(data)
        }
        getRanking()
    }, [])

    return (
        <main className="min-h-screen bg-gray-900 text-white p-8">
            <h1 className="text-3xl font-black text-yellow-400 mb-8 text-center uppercase">Classificação Geral</h1>
            <div className="max-w-md mx-auto bg-gray-800 rounded-2xl overflow-hidden border border-gray-700">
                <table className="w-full text-left">
                    <thead className="bg-gray-700 text-gray-400 text-xs uppercase">
                        <tr>
                            <th className="px-6 py-3">Pos</th>
                            <th className="px-6 py-3">Apostador</th>
                            <th className="px-6 py-3 text-right">Pts</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                        {lista.map((item, index) => (
                            <tr key={item.user_id} className="hover:bg-gray-750 transition-colors">
                                <td className="px-6 py-4 font-mono text-yellow-500">{index + 1}º</td>
                                <td className="px-6 py-4 text-sm">{item.email.split('@')[0]}</td>
                                <td className="px-6 py-4 text-right font-bold text-xl">{item.total_pontos}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="text-center mt-8">
                <a href="/" className="text-gray-500 underline text-sm">Voltar para meus palpites</a>
            </div>
        </main>
    )
}
