"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Home, Search } from "lucide-react";
import { fetchPokemon } from "@/data/api/pokemon";
import Link from "next/link";

export function Header() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const name = query.trim().toLowerCase();
    if (!name) return;

    try {
      const pokemon = await fetchPokemon(name);
      router.push(`/pokemon/${pokemon.name}`);
    } catch {
      router.push(`/pokemon/snorlax`);
    } finally {
      setQuery("");
    }
  }

  return (
    <header className="flex items-center bg-zinc-900 px-6 py-3 space-x-4">
      <div className="flex-shrink-0">
        <Image src="/pokeball.png" alt="Pokefy" width={28} height={28} />
      </div>
      <Link href={"/"}>
        <button
          aria-label="Home"
          className="p-2 rounded-full hover:bg-zinc-800 transition"
        >
          <Home className="w-5 h-5 text-white" />
        </button>
      </Link>
      <form onSubmit={handleSubmit} className="flex-1">
        <div className="relative">
          <input
            name="search"
            type="search"
            placeholder="Search for a Pokemon"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="
              pl-10 pr-4 py-2
              bg-zinc-800 text-white placeholder-zinc-400
              rounded-full focus:outline-none focus:ring-2 focus:ring-zinc-700
            "
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 pointer-events-none" />
        </div>
      </form>
    </header>
  );
}
