export async function getPokemons(limit = 20) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
      if (!response.ok) throw new Error("Failed to fetch Pokémon list");
  
      const data = await response.json();
  
      const detailed = await Promise.all(
        data.results.map(async (poke: { name: string }) => {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke.name}`);
          const json = await res.json();
  
          return {
            id: json.id,
            name: json.name,
            image: json.sprites.other.dream_world.front_default || json.sprites.front_default,
          };
        })
      );
  
      return detailed;
    } catch (error) {
      console.error("Error fetching multiple Pokémon:", error);
      return [];
    }
  }
  