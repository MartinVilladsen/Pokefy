export async function getPokemon(pokemonName: string = 'ditto') {
    try {
      const name = typeof pokemonName === 'string' ? pokemonName.toLowerCase() : 'ditto';
  
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  
      if (!response.ok) {
        throw new Error(`Failed to fetch data`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching Pokémon data:', error);
      throw error;
    }
  }
  