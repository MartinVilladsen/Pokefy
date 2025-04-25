import { Move } from "@/model/Pokemon"
import { Clock } from "lucide-react"

interface MovesListProps {
  moves: Move[]
  pokemonName: string
}

export function MovesList({ moves, pokemonName }: MovesListProps) {
  return (
    <div className="w-full max-w-4xl">
      <div className="grid grid-cols-[auto_1fr_auto] gap-4 px-4 py-2 text-xs text-zinc-400 border-b border-zinc-800">
        <div className="w-8 text-center">#</div>
        <div>MOVES</div>
        <div className="flex items-center">
          <Clock className="w-4 h-4" />
        </div>
      </div>

      <div className="divide-y divide-zinc-800/50">
        {moves.map((move, i) => (
          <div
            key={i}
            className="grid grid-cols-[auto_1fr_auto] gap-4 px-4 py-3 text-zinc-400 hover:bg-white hover:bg-opacity-10 rounded-md group transition-all"
          >
            <div className="w-8 text-center self-center group-hover:text-white">{i + 1}</div>
            <div className="self-center">
              <p className="text-white capitalize font-medium group-hover:text-green-500">
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
