export const apiPokedex = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokedex/national");
  return await res.json();
};
