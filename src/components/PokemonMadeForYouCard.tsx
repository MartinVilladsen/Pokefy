// components/PokemonMadeForYouCard.tsx
import { Pokemon } from "@/model/Pokemon"
import Image from "next/image"

export function PokemonMadeForYouCard({ pokemon }: { pokemon: Pokemon }) {
  return (
    <div className="w-full max-w-xs bg-zinc-800 bg-opacity-40 rounded-md overflow-hidden hover:bg-zinc-700 hover:bg-opacity-60 transition group">
      <div className="relative w-full aspect-square">
        <Image
          src={pokemon.image || pokemon.imageicon}
          alt={pokemon.name}
          fill
          className="object-contain"
        />
      </div>
      <div className="p-3">
        <p className="text-white font-medium capitalize truncate">
          {pokemon.name}
        </p>
      </div>
    </div>
  )
}
