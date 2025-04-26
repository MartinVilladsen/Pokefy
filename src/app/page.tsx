"use cache"
import Link from "next/link"
import { fetchPokemons } from "@/data/api/pokemon"
import { BackgroundGradient } from "@/components/BackgroundGradient"
import { SectionHeader } from "@/components/SectionHeader"
import { PokemonSmallCard } from "@/components/PokemonSmallCard"
import { PokemonMadeForYouCard } from "@/components/PokemonMadeForYouCard"

export default async function HomePage() {
  const all = await fetchPokemons(20)
  const trending = all.slice(0, 4)
  const featured = all.slice(6, 12)

  return (
    <div className="min-h-[calc(100vh-64px)] relative">
      <BackgroundGradient />

      <div className="relative z-10 px-6 py-8 mx-auto max-w-7xl space-y-16">
        <section>
          <SectionHeader title="Trending Pokémons" />
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 gap-6">
            {trending.map((p) => (
              <Link key={p.name} href={`/pokemon/${p.name}`} prefetch={true}>
                <PokemonSmallCard pokemon={p} />
              </Link>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader title="Featured Pokémons" />
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {featured.map((p) => (
              <Link key={p.name} href={`/pokemon/${p.name}`} prefetch={true}>
                <PokemonMadeForYouCard pokemon={p} />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
