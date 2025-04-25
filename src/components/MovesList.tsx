import { Move } from "@/model/Pokemon"

interface MovesListProps {
  moves: Move[]
  pokemonName: string
}

export function MovesList({ moves, pokemonName }: MovesListProps) {
  return (
    <div className="w-full max-w-4xl">
      <div className="grid grid-cols-[auto_1fr_auto] gap-4 px-4 py-2 text-xs text-zinc-400">
        <div className="w-8 text-center">#</div>
        <div>MOVES</div>
      </div>

      <div className="divide-y divide-zinc-800/50">
        {moves.map((move, i) => (
          <div
            key={i}
            className="grid grid-cols-[auto_1fr_auto] gap-4 px-4 py-3 text-zinc-400 border-b-zinc-700  bg-zinc-800 bg-opacity-60 backdrop-blur-sm overflow-hidden hover:bg-zinc-700 hover:bg-opacity-80 group transition-all"
          >
            <div className="w-8 text-center self-center group-hover:text-white">{i + 1}</div>
            <div className="self-center">
              <p className="text-zinc-400 capitalize font-medium group-hover:text-green-500">
                {move.name.replace("-", " ")}
              </p>
              <p className="text-xs text-zinc-400 capitalize">{pokemonName}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
