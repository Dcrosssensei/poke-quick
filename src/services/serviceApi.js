export const apiPokedex = () => {
  return fetch("https://pokeapi.co/api/v2/pokedex/national").then((res) =>
    res.json()
  );
};
