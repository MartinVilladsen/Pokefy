"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Home, Search } from "lucide-react";
import { getPokemon } from "@/app/data/getPokemon";

export function Header() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const name = query.trim().toLowerCase();
    if (!name) return;

    try {
      const pokemon = await getPokemon(name);
      router.push(`/pokemon/${pokemon.name}`);
    } catch {
      console.error("Pokémon not found");
    } finally {
      setQuery("");
    }
  }

  return (
    <header className="flex items-center bg-zinc-900 px-6 py-3 space-x-4">
      <div className="flex-shrink-0">
        <Image src="/spotify_logo.svg" alt="Pokéfy" width={28} height={28} />
      </div>
      <button
        aria-label="Home"
        className="p-2 rounded-full hover:bg-zinc-800 transition"
        onClick={() => router.push("/")}
      >
        <Home className="w-5 h-5 text-white" />
      </button>
      <form onSubmit={handleSubmit} className="flex-1">
        <div className="relative">
          <input
            name="search"
            type="search"
            placeholder="Search for a Pokémon…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="
              w-full pl-10 pr-4 py-2
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
