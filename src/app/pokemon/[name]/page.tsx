import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { getPokemon } from "@/app/data/getPokemon"
import { Play, Heart, MoreHorizontal, ArrowLeft } from "lucide-react"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react"

type Params = { params: { name: string } }

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const displayName = params.name.charAt(0).toUpperCase() + params.name.slice(1)
  return {
    title: `${displayName} • Pokéfy`,
    description: `Details and moves for ${displayName}`,
  }
}

export default async function PokemonPage({ params }: Params) {
  const raw = await getPokemon(params.name)
  const name = raw.name.charAt(0).toUpperCase() + raw.name.slice(1)
  const types = raw.types.map((t: any) => t.type.name)
  const heightM = raw.height / 10
  const weightKg = raw.weight / 10
  const image =
    raw.sprites.other.dream_world.front_default ||
    raw.sprites.front_default

  const moves = raw.moves
    .slice(0, 8)
    .map((m: any) => ({
      name: m.move.name.replace("-", " "),
      method: m.version_group_details[0].move_learn_method.name.replace("-", " "),
      level: m.version_group_details[0].level_learned_at,
    }))

  return (
    <div className="min-h-[calc(100vh-64px)]  tblack/80 p-8 space-y-8">
      <div className="flex items-center gap-6">
        <Link href="/" className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700">
          <ArrowLeft className="w-5 h-5 text-white" />
        </Link>
        <div className="w-48 h-48 relative flex-shrink-0">
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain rounded-md shadow-lg"
          />
        </div>
        <div className="flex-1 space-y-1">
          <p className="uppercase text-sm text-zinc-400">Pokémon</p>
          <h1 className="text-5xl font-bold">{name}</h1>
          <p className="text-zinc-300 capitalize">{types.join(" • ")}</p>
          <p className="text-zinc-500 text-sm">
            {heightM.toFixed(1)} m • {weightKg.toFixed(1)} kg
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-4 bg-green-500 rounded-full hover:scale-105 transition">
          <Play className="w-6 h-6 text-black" />
        </button>
        <button className="p-3 bg-zinc-800 rounded-full hover:bg-zinc-700 transition">
          <Heart className="w-5 h-5 text-white" />
        </button>
        <button className="p-3 bg-zinc-800 rounded-full hover:bg-zinc-700 transition">
          <MoreHorizontal className="w-5 h-5 text-white" />
        </button>
      </div>

      <table className="w-full text-left bg-zinc-900/50 backdrop-blur-md rounded-lg overflow-hidden">
        <thead className="text-zinc-400 border-b border-zinc-700">
          <tr>
            <th className="py-2">Move</th>
          </tr>
        </thead>
        <tbody>
          {moves.map((mv: { name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; method: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; level: any }, i: Key | null | undefined) => (
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
