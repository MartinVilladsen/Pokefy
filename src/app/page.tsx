import { ArrowLeft } from "lucide-react"
import { PokemonSmallCard } from "@/components/PokemonSmallCard"
import { PokemonMadeForYouCard } from "@/components/PokemonMadeForYouCard"
import { fetchPokemons } from "@/data/api/pokemon"
import Link from "next/link"

export default async function HomePage() {
  const all = await fetchPokemons(14)

  const goodNight = all.slice(0, 6)
  const madeForYou = all.slice(6, 14)

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="flex items-center gap-4">
        <button className="p-2 bg-zinc-800 bg-opacity-60 rounded-full hover:bg-zinc-700 hover:bg-opacity-80 transition">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
      </div>

      <section>
        <h1 className="text-3xl font-bold mb-4">Good night</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {goodNight.map((p) => (
            <Link key={p.name} href={`/pokemon/${p.name}`}>
              <PokemonSmallCard key={p.id} pokemon={p} />
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Made for you</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {madeForYou.map((p) => (
            <Link key={p.name} href={`/pokemon/${p.name}`}>
              <PokemonMadeForYouCard key={p.id} pokemon={p} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
