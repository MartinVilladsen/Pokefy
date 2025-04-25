import Image from "next/image"
import { TypeBadge } from "@/components/TypeBadge"
import { Pokemon } from "@/model/Pokemon"

interface PokemonHeaderProps {
  pokemon: Pokemon
  moveCount: number
}

export function PokemonHeader({ pokemon, moveCount }: PokemonHeaderProps) {
  return (
    <>
      <div className="flex flex-col md:flex-row items-start md:items-end gap-6 mb-6">
        <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 shadow-2xl flex-shrink-0">
          <Image src={pokemon.image || pokemon.imageicon} alt={pokemon.name} fill className="object-contain" />
        </div>

        <div className="flex-1 space-y-2">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white capitalize">
            {pokemon.name}
          </h1>

          <div className="flex items-center mt-4">
            <div className="rounded-full overflow-hidden">
              <Image
                src={pokemon.imageicon || "/placeholder.svg"}
                alt={pokemon.name}
                width={60}
                height={60}
                className="object-cover"
              />
            </div>
            <p className="text-sm text-white font-medium capitalize ml-3">
              {pokemon.name} • {pokemon.height} m • {pokemon.weight} kg • {moveCount} moves
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-2 capitalize">
            {pokemon.types.map((type) => (
              <TypeBadge key={type} type={type} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
