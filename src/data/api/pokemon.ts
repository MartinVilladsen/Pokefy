import {Evolution, Pokemon} from "@/model/Pokemon";
import {PokemonDetailDTO} from "@/data/dto/pokemon.dto";
import {mapPokemonDetail} from "@/data/mappers/mapPokemonDetail";
import {EvolutionChainDTO, flattenEvolutionNames} from "@/data/dto/evolution.dto";

async function fetchDto(nameOrId: string): Promise<PokemonDetailDTO> {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`, {
        next: { revalidate: 3600 }
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    return res.json()
}

export async function fetchPokemon(name: string): Promise<Pokemon> {
    const safe = name.trim().toLowerCase();
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${safe}`, {
        next: { revalidate: 3600 }
    });

    if (!response.ok) {
        response = await fetch(`https://pokeapi.co/api/v2/pokemon/snorlax`, {
            next: { revalidate: 3600 }
        });
    }

    const dto: PokemonDetailDTO = await response.json()
    return mapPokemonDetail(dto)
}

export async function fetchPokemons(count = 20): Promise<Array<Pokemon>> {
    const ids = new Set<number>()
    while (ids.size < count) {
        const randomId = Math.floor(Math.random() * 800) + 1
        ids.add(randomId)
    }

    return await Promise.all(
        Array.from(ids).map(async (id) => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
                next: { revalidate: 20 }
            })
            if (!res.ok) throw new Error(`Failed to fetch Pokemon #${id}`)
            const dto = await res.json() as PokemonDetailDTO
            return mapPokemonDetail(dto)
        })
    )
}

export async function fetchEvolutions(name: string): Promise<Array<Evolution>> {
    const safe = name.trim().toLowerCase() || "ditto"

    const speciesRes = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${safe}`, {
        next: { revalidate: 3600 }
    })
    if (!speciesRes.ok) {
        console.warn(`Failed species lookup for ${safe}`)
        return []
    }
    const {evolution_chain: {url}} = await speciesRes.json()

    const chainRes = await fetch(url, {
        next: { revalidate: 3600 }
    })
    if (!chainRes.ok) {
        console.warn(`Failed fetching evolution chain`)
        return []
    }
    const chainDto: EvolutionChainDTO = await chainRes.json()

    const evoNames = flattenEvolutionNames(chainDto.chain)

    return await Promise.all(
        evoNames.map(async (n) => {
            const dto = await fetchDto(n)
            const p = mapPokemonDetail(dto)
            return {
                id: p.id,
                name: p.name,
                image: p.image,
            }
        })
    ).then(arr => arr.filter((e): e is Evolution => e.id !== 0))
}
