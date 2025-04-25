
export type Move = {
    name: string;
}

export type Pokemon = {
    id: number;
    name: string;
    types: Array<string>
    height: number;
    weight: number;
    image: string;
    moves: Array<Move>;
}