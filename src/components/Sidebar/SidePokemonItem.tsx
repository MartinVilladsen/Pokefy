import Image from "next/image";
import Link from "next/link";

export type Pokemon = {
  id: number;
  name: string;
  image: string;
}

export function SidePokemonItem({ pokemon }: { pokemon: Pokemon }) {
  return (
    <li>
      <Link
        href={`/pokemon/${pokemon.id}`}
        className="flex items-center gap-3 px-3 py-2 rounded hover:bg-zinc-800 transition"
      >
        <Image
          src={pokemon.image}
          width={32}
          height={32}
          alt={pokemon.name}
          className="rounded"
        />
        <span className="truncate capitalize text-sm text-zinc-200">
          {pokemon.name}
        </span>
      </Link>
    </li>
  );
}
