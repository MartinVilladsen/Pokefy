import Image from "next/image"
import {Play} from "lucide-react"
import {Pokemon} from "@/model/Pokemon"

export async function PokemonMadeForYouCard({pokemon}: { pokemon: Pokemon }) {
    return (
        <div
            className="group relative bg-zinc-800 bg-opacity-40 rounded-md overflow-hidden hover:bg-zinc-700 hover:bg-opacity-60 transition">
            <div className="relative aspect-square">
                <Image
                    src={pokemon.image || pokemon.imageicon || "/placeholder.svg"}
                    alt={pokemon.name}
                    fill
                    className="object-contain p-2"
                    loading="lazy"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                />
            </div>
            <div className="p-3 flex items-center justify-between">
                <div className="space-y-1 overflow-hidden">
                    <p className="text-white font-medium capitalize truncate">
                        {pokemon.name}
                    </p>
                    <p className="text-xs text-zinc-400 line-clamp-2">
                        {pokemon.types?.join(", ") || "Pokemon"}
                    </p>
                </div>
                <button
                    className="opacity-0 group-hover:opacity-100 p-3 bg-green-500 rounded-full shadow-lg hover:scale-105 transition">
                    <Play className="w-5 h-5 text-black fill-black"/>
                </button>
            </div>
        </div>
    )
}
