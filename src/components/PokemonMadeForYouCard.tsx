"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export interface Pokemon {
  id: number;
  name: string;
  image: string;
}

export function PokemonMadeForYouCard({ pokemon }: { pokemon: Pokemon }) {
  return (
    <Card className="bg-zinc-800 overflow-hidden rounded-lg hover:shadow-lg transition">
      <CardContent className="p-0 relative h-0 pb-[100%] overflow-visible">
        <Image
          src={pokemon.image}
          alt={pokemon.name}
          fill
          className="object-contain"
        />
      </CardContent>

      <div className="px-4 py-3">
        <p className="text-white font-semibold capitalize truncate">
          {pokemon.name}
        </p>
      </div>
    </Card>
  );
}
