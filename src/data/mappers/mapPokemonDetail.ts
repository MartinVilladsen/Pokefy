import {PokemonDetailDTO} from "@/data/dto/pokemon.dto";
import {Move, Pokemon} from "@/model/Pokemon";

export function mapPokemonDetail(dto: PokemonDetailDTO): Pokemon {
    const image = dto.sprites.other.dream_world.front_default ?? ""
    const types = dto.types.map((type) => type.type.name);
    const moves: Array<Move> = dto.moves.slice(0, 8).map((m) => ({
        name: m.move.name.replace(/'-'/g, " "),
    }))

    return {
        id: dto.id,
        name: dto.name.charAt(0).toUpperCase() + dto.name.slice(1),
        types,
        height: dto.height / 10,
        weight: dto.weight / 10,
        image,
        moves,
    }
}