export const fetchPokemon = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  const pokemon = {
    id: data.id,
    name: data.name,
    image: data.sprites.front_default,
  };
  return pokemon;
};

export default fetchPokemon
