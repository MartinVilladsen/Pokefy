"use cache";
import {fetchPokemon} from "@/data/api/pokemon";

export async function searchPokemonByName(name: string) {
    const pokemonName = name.trim().toLowerCase();
    if (!pokemonName) return null;

    try {
        return await fetchPokemon(pokemonName);
    } catch (error) {
        console.error("Pokemon not found", error);
        return null;
    }
}