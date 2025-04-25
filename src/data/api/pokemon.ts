"use cache"
import {Pokemon} from "@/model/Pokemon";
import {PokemonDetailDTO} from "@/data/dto/pokemon.dto";
import {mapPokemonDetail} from "@/data/mappers/mapPokemonDetail";

export async function fetchPokemon(name: string): Promise<Pokemon> {
    var safe = name.trim().toLowerCase();
    var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${safe}`);

    if (!response.ok) {
        response = await fetch(`https://pokeapi.co/api/v2/pokemon/snorlax`);
    } 
        

    const dto: PokemonDetailDTO = await response.json()
    return mapPokemonDetail(dto)
}

export async function fetchPokemons(count = 20): Promise<Pokemon[]> {
    const ids = new Set<number>()
    while (ids.size < count) {
      const randomId = Math.floor(Math.random() * 800) + 1
      ids.add(randomId)
    }
  
    const pokemons = await Promise.all(
      Array.from(ids).map(async (id) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        if (!res.ok) throw new Error(`Failed to fetch Pokémon #${id}`)
        const dto = await res.json() as PokemonDetailDTO
        return mapPokemonDetail(dto)
      })
    )
  
    return pokemons
  }