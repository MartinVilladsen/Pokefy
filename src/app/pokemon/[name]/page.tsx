import {Metadata} from "next"
import Image from "next/image"
import Link from "next/link"
import {Play, Heart, MoreHorizontal, ArrowLeft} from "lucide-react"
import {fetchPokemon} from "@/data/api/pokemon";

type Params = {
    params: Promise<{
        name: string
    }>
}

export async function generateMetadata({params}: Params): Promise<Metadata> {
    const {name} = await params
    const displayName = name.charAt(0).toUpperCase() + name.slice(1)
    return {
        title: `${displayName} • Pokéfy`,
        description: `Details and moves for ${displayName}`,
    }
}

export default async function PokemonPage({params}: Params) {
    const {name} = await params
    const pokemon = await fetchPokemon(name)

    return (
        <div className="min-h-[calc(100vh-64px)]  tblack/80 p-8 space-y-8">
            <div className="flex items-center gap-6">
                <Link href="/" className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700">
                    <ArrowLeft className="w-5 h-5 text-white"/>
                </Link>
                <div className="w-48 h-48 relative flex-shrink-0">
                    <Image
                        src={pokemon.image}
                        alt={pokemon.name}
                        fill
                        className="object-contain rounded-md shadow-lg"
                    />
                </div>
                <div className="flex-1 space-y-1">
                    <p className="uppercase text-sm text-zinc-400">Pokémon</p>
                    <h1 className="text-5xl font-bold">{pokemon.name}</h1>
                    <p className="text-zinc-300 capitalize">{pokemon.types.join(" • ")}</p>
                    <p className="text-zinc-500 text-sm">
                        {pokemon.height.toFixed(1)} m • {pokemon.weight.toFixed(1)} kg
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button className="p-4 bg-green-500 rounded-full hover:scale-105 transition">
                    <Play className="w-6 h-6 text-black"/>
                </button>
                <button className="p-3 bg-zinc-800 rounded-full hover:bg-zinc-700 transition">
                    <Heart className="w-5 h-5 text-white"/>
                </button>
                <button className="p-3 bg-zinc-800 rounded-full hover:bg-zinc-700 transition">
                    <MoreHorizontal className="w-5 h-5 text-white"/>
                </button>
            </div>

            <table className="w-full text-left bg-zinc-900/50 backdrop-blur-md rounded-lg overflow-hidden">
                <thead className="text-zinc-400 border-b border-zinc-700">
                <tr>
                    <th className="py-2">Move</th>
                </tr>
                </thead>
                <tbody>
                {pokemon.moves.map((mv, i) => (
                    <tr
                        key={i}
                        className="border-b border-zinc-800 hover:bg-zinc-800 transition"
                    >
                        <td className="py-2 capitalize">{mv.name}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
