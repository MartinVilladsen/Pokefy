import { SidePokemonItem } from "./SidePokemonItem";
import { SideMenuItem } from "./SideMenuItem";
import {fetchPokemons} from "@/data/api/pokemon";

export async function Sidebar() {
  const pokemons = await fetchPokemons(6);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <ul className="space-y-2">
          <SideMenuItem href="/" iconName="carbon:home">
            Home
          </SideMenuItem>
          <SideMenuItem href="#" iconName="carbon:search">
            Search
          </SideMenuItem>
        </ul>
      </div>

      <div>
        <ul className="space-y-2">
          <SideMenuItem href="#" iconName="carbon:media-library">
            Your library
          </SideMenuItem>
        </ul>
        <ul className="mt-4 space-y-1">
          {pokemons.map((p) => (
            <SidePokemonItem key={p.id} pokemon={p} />
          ))}
        </ul>
      </div>
    </div>
  );
}
