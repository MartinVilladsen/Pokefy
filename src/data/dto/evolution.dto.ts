
export type EvolutionNodeDTO = {
    species: { name: string; url: string}
    evolves_to: Array<EvolutionNodeDTO>
}

export type EvolutionChainDTO = {
    chain: EvolutionNodeDTO
}

export function flattenEvolutionNames(node: EvolutionNodeDTO) {
    const names = [node.species.name]
    if (node.evolves_to.length > 0) {
        names.push(...flattenEvolutionNames(node.evolves_to[0]))
    }
    return names
}