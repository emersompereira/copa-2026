import { createClient } from '@supabase/supabase-js'
export const dynamic = 'force-dynamic' // Adicione isso aqui!

import { createClient } from '@supabase/supabase-js'
// ... resto do código

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
  // 3. Buscar dados (Fetch direto no banco via API)
  const { data: jogos } = await supabase
    .from('partidas')
    .select('*')
    .order('data_hora', { ascending: true })

  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-yellow-400">
        🏆 Bolão Copa 2026
      </h1>

      <div className="max-w-2xl mx-auto grid gap-4">
        {jogos?.map((jogo: Jogo) => (
          <div 
            key={jogo.id} 
            className="bg-gray-800 p-6 rounded-lg border border-gray-700 flex justify-between items-center"
          >
            {/* Time A */}
            <div className="text-right w-1/3">
              <span className="font-bold text-xl">{jogo.time_a}</span>
            </div>

            {/* Placar / X */}
            <div className="text-center w-1/3 px-2">
              <span className="text-gray-400 text-sm block mb-1">
                {new Date(jogo.data_hora).toLocaleDateString('pt-BR')}
              </span>
              <div className="bg-gray-900 py-2 px-4 rounded font-mono text-2xl font-bold">
                {jogo.gols_a ?? '-'} <span className="text-gray-500 mx-2">x</span> {jogo.gols_b ?? '-'}
              </div>
              <span className="text-xs text-gray-500 uppercase mt-1 block">
                {jogo.status}
              </span>
            </div>

            {/* Time B */}
            <div className="text-left w-1/3">
              <span className="font-bold text-xl">{jogo.time_b}</span>
            </div>
          </div>
        ))}

        {jogos?.length === 0 && (
          <p className="text-center text-gray-500">Nenhum jogo encontrado. Rode o script de ingestão!</p>
        )}
      </div>
    </main>
  )
}
