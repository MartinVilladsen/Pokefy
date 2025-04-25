
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
    imageicon: string;
    moves: Array<Move>;
    evolutions?: Array<Evolution>;
}

export type Evolution = {
    id: number;
    name: string;
    image: string;
}