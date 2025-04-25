"use cache"
import {Pokemon} from "@/model/Pokemon";
import {PokemonDetailDTO} from "@/data/dto/pokemon.dto";
import {mapPokemonDetail} from "@/data/mappers/mapPokemonDetail";

export async function fetchPokemon(name: string): Promise<Pokemon> {
    const safe = name.trim().toLowerCase() || 'ditto';
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${safe}`);

    if (!response.ok) throw new Error(`Failed to fetch data for ${name}`);

    const dto: PokemonDetailDTO = await response.json()
    return mapPokemonDetail(dto)
}

export async function fetchPokemons(limit = 20): Promise<Array<Pokemon>> {
    const listResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);

    if (!listResponse.ok) throw new Error("Failed to fetch Pokémon list");

    const { results }: {results: {name: string}[]} = await listResponse.json()

    return await Promise.all(
        results.map(async ({name}) => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            const dto: PokemonDetailDTO = await res.json()
            return mapPokemonDetail(dto)
        })
    )
}