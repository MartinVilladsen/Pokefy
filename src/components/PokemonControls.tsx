import { Play, Plus, MoreHorizontal } from "lucide-react"

export function PokemonControls() {
  return (
    <div className="flex items-center gap-6 mb-8">
      <button className="p-3.5 bg-green-500 rounded-full hover:scale-105 transition shadow-lg">
        <Play className="w-6 h-6 text-black fill-black" />
      </button>
      <button className="p-2.5 border border-zinc-500 rounded-full hover:border-white transition">
        <Plus className="w-5 h-5 text-zinc-300" />
      </button>
      <button className="text-zinc-400 hover:text-white">
        <MoreHorizontal className="w-6 h-6" />
      </button>
    </div>
  )
}
