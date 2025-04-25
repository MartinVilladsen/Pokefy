"use client";

import Image from "next/image";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export interface Pokemon {
    id: number;
    name: string;
    image: string;
}

export function PokemonGridCard({ pokemon }: { pokemon: Pokemon }) {
  return (
    <Card className="bg-zinc-800 bg-opacity-60 backdrop-blur-md overflow-hidden rounded-md hover:scale-[1.03] transition">
      <CardContent className="p-0 relative h-0 pb-[100%]">
        <Image
          src={pokemon.image}
          alt={pokemon.name}
          fill
          className="object-cover"
        />
      </CardContent>
      <CardTitle className="px-3 py-2 text-sm font-semibold capitalize">
        {pokemon.name}
      </CardTitle>
    </Card>
  );
}
