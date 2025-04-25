// components/PokemonSmallCard.tsx
"use client";

import Image from "next/image";
import { Play } from "lucide-react";

export interface Pokemon {
  id: number;
  name: string;
  image: string;
}

export function PokemonSmallCard({ pokemon }: { pokemon: Pokemon }) {
  return (
    <div className="group relative flex items-center gap-4 bg-zinc-800 rounded-md p-2 hover:bg-zinc-700 transition">
      <div className="w-16 h-16 flex-none">
        <Image
          src={pokemon.image}
          alt={pokemon.name}
          width={64}
          height={64}
          className="object-contain"
        />
      </div>

      <p className="text-white font-semibold capitalize flex-1 truncate">
        {pokemon.name}
      </p>

      <button className="invisible group-hover:visible p-2 bg-green-500 rounded-full">
        <Play className="w-4 h-4 text-black" />
      </button>
    </div>
  );
}
