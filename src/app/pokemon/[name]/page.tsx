import type { Metadata } from "next"
import { fetchPokemon } from "@/data/api/pokemon"
import { BackgroundGradient } from "@/components/BackgroundGradient"
import { MovesList } from "@/components/MovesList"
import { PokemonHeader } from "@/components/PokemonHeader"
import { PokemonControls } from "@/components/PokemonControls"

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
  const pokemon = await fetchPokemon(name)

  const moveCount = Math.min(pokemon.moves.length, Math.floor(Math.random() * 6) + 10)
  const selectedMoves = pokemon.moves.slice(0, moveCount)

  return (
    <div className="min-h-[calc(100vh-64px)] relative">
      <BackgroundGradient />

      <div className="relative z-10 p-6 container mx-auto">
        <PokemonHeader pokemon={pokemon} moveCount={moveCount} />
        <PokemonControls />
        <MovesList moves={selectedMoves} pokemonName={pokemon.name} />
      </div>
    </div>
  )
}
