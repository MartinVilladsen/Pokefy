import { getPokemons } from "@/app/data/getPokemons";
import { ArrowLeft } from "lucide-react";
import { PokemonSmallCard } from "../components/PokemonSmallCard";
import { PokemonMadeForYouCard } from "../components/PokemonMadeForYouCard";

export default async function HomePage() {
   interface Pokemon {
    id: number;
    name: string;
    image: string;
}
  const all = await getPokemons(14);
  const goodNight: Pokemon[] = all.slice(0, 6);
  const madeForYou: Pokemon[] = all.slice(6, 14);

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <button className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        <h1 className="text-3xl font-bold">Good night</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {goodNight.map((p) => (
          <PokemonSmallCard key={p.id} pokemon={p} />
        ))}
      </div>

      <h2 className="text-2xl font-semibold">Made for you</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {madeForYou.map((p) => (
          <PokemonMadeForYouCard key={p.id} pokemon={p} />
        ))}
      </div>
    </div>
  );
}
