"use client"

import Image from "next/image"
import { Play } from "lucide-react"
import { Pokemon } from "@/model/Pokemon"

export function PokemonSmallCard({ pokemon }: { pokemon: Pokemon }) {
  return (
    <div className="group relative flex items-center bg-zinc-800 bg-opacity-60 backdrop-blur-sm rounded-md overflow-hidden hover:bg-zinc-700 hover:bg-opacity-80 transition h-[56px]">
      <div className="w-14 h-14 p-1.5 flex-none">
        <Image
          src={pokemon.image || pokemon.imageicon}
          alt={pokemon.name}
          width={56}
          height={56}
          className="object-cover"
        />
      </div>

      <p className="text-white font-semibold capitalize flex-1 px-2 truncate">{pokemon.name}</p>

      <button className="opacity-0 group-hover:opacity-100 p-2 bg-green-500 rounded-full mr-2 transition">
        <Play className="w-4 h-4 text-black fill-black" />
      </button>
    </div>
  )
}
