export const dynamic = 'force-dynamic'

import { createClient } from '@supabase/supabase-js'
import Login from './login' // Importando o componente que você criou

// 1. Criar cliente do Supabase (Server-side)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

// 2. Definir o tipo (TypeScript agradece)
type Jogo = {
  id: number
  time_a: string
  time_b: string
  data_hora: string
  status: string
  gols_a: number | null
  gols_b: number | null
}

export default async function Home() {
  // 3. Buscar dados dos jogos
  const { data: jogos } = await supabase
    .from('partidas')
    .select('*')
    .order('data_hora', { ascending: true })

  return (
    <main className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
      {/* Cabeçalho */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-black mb-2 text-yellow-400 drop-shadow-md">
          🏆 BOLÃO COPA 2026
        </h1>
        <p className="text-gray-400 uppercase tracking-widest text-sm">
          SRE Edition - Gestão de Palpites
        </p>
      </header>

      {/* ÁREA DE LOGIN - O formulário aparece aqui */}
      <Login />

      {/* LISTA DE JOGOS */}
      <div className="max-w-2xl mx-auto grid gap-6">
        <h2 className="text-xl font-bold border-b border-gray-700 pb-2 mb-2 text-gray-300">
          Próximas Partidas
        </h2>

        {jogos?.map((jogo: Jogo) => (
          <div
            key={jogo.id}
            className="bg-gray-800 p-6 rounded-2xl border border-gray-700 flex justify-between items-center hover:border-yellow-500/50 transition-colors shadow-lg"
          >
            {/* Time A */}
            <div className="text-right w-1/3">
              <span className="font-black text-xl md:text-2xl">{jogo.time_a}</span>
            </div>

            {/* Placar / Informações Centrais */}
            <div className="text-center w-1/3 px-4">
              <span className="text-gray-500 text-[10px] font-bold block mb-2 uppercase tracking-tighter">
                {new Date(jogo.data_hora).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'long',
                    hour: '2-digit',
                    minute: '2-digit'
                })}
              </span>
              
              <div className="bg-gray-950 py-3 px-2 rounded-xl border border-gray-700 font-mono text-2xl font-bold flex justify-center items-center gap-3">
                <span className={jogo.gols_a !== null ? "text-white" : "text-gray-700"}>
                    {jogo.gols_a ?? '-'}
                </span>
                <span className="text-yellow-500 text-sm">X</span>
                <span className={jogo.gols_b !== null ? "text-white" : "text-gray-700"}>
                    {jogo.gols_b ?? '-'}
                </span>
              </div>

              <span className={`text-[10px] mt-2 block font-bold uppercase ${
                jogo.status === 'finalizado' ? 'text-red-500' : 'text-green-500'
              }`}>
                ● {jogo.status}
              </span>
            </div>

            {/* Time B */}
            <div className="text-left w-1/3">
              <span className="font-black text-xl md:text-2xl">{jogo.time_b}</span>
            </div>
          </div>
        ))}

        {/* State vazio */}
        {jogos?.length === 0 && (
          <div className="text-center py-20 bg-gray-800/50 rounded-2xl border border-dashed border-gray-700">
            <p className="text-gray-500 font-mono">
              [SYSTEM ERROR]: Nenhuma partida carregada no banco.<br/>
              Favor rodar o script de ingestão.
            </p>
          </div>
        )}
      </div>

      <footer className="mt-20 text-center text-gray-600 text-xs font-mono">
        v1.0.0 | Powered by Next.js & Supabase
      </footer>
    </main>
  )
}
