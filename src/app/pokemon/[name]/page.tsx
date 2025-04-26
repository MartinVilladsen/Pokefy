"use cache"
import type { Metadata } from "next"
import { fetchEvolutions, fetchPokemon } from "@/data/api/pokemon"
import { BackgroundGradient } from "@/components/BackgroundGradient"
import { MovesList } from "@/components/MovesList"
import { PokemonHeader } from "@/components/PokemonHeader"
import { PokemonControls } from "@/components/PokemonControls"
import { EvolutionStrip } from "@/components/evolution/EvolutionStrip"

type Params = {
  params: Promise<{
    name: string
  }>
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { name } = await params
  const displayName = name.charAt(0).toUpperCase() + name.slice(1)
  return {
    title: `Pokefy ${displayName}`,
    description: `Details and moves for ${displayName}`,
  }
}

export default async function PokemonPage({ params }: Params) {
  const { name } = await params

  const [pokemon, evolution] = await Promise.all([
    fetchPokemon(name),
    fetchEvolutions(name),
  ])

  const moveCount = Math.min(pokemon.moves.length, Math.floor(Math.random() * 6) + 10)
  const selectedMoves = pokemon.moves.slice(0, moveCount)

  return (
    <div className="min-h-[calc(100vh-64px)] relative">
      <BackgroundGradient />

      <div className="relative z-10 py-6 px-4 sm:px-6 lg:px-8 mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row lg:gap-20">
          <div className="w-full lg:w-2/3 flex flex-col gap-8">
            <PokemonHeader pokemon={pokemon} moveCount={moveCount} />
            <PokemonControls />
            <MovesList moves={selectedMoves} pokemonName={pokemon.name} />
          </div>
          <div className="w-full lg:w-1/3 mt-10 lg:mt-0 relative z-50">
            <EvolutionStrip evolutions={evolution} />
          </div>
        </div>
      </div>
    </div>
  )
}
