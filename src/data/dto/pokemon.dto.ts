
export type PokemonDetailDTO = {
    id: number
    name: string
    height: number
    weight: number
    sprites: {
        front_shiny: string,
        other: {
            dream_world: {
                front_default: string | null
            }
        }
    }
    types: Array<{
        slot: number
        type: { name: string }
    }>
    moves: Array<{
        move: { name: string },
    }>
}