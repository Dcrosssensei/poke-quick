const detPokemon = (id) => {
  return fetch(`https://pokeapi.co/api/v2/type/${id}`).then((res) =>
    res.json()
  );
};
const detSpeciePokemon = (id) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then((res) =>
    res.json()
  );
};
const detDescription = (id) => {
  return fetch(`https://pokeapi.co/api/v2/characteristic/${id}`).then((res) =>
    res.json()
  );
};

export { detPokemon, detSpeciePokemon, detDescription };
