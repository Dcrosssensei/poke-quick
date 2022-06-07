const detPokemon = async (id) => {
  return await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) =>
    res.json()
  );
};
const detSpeciePokemon = async (id) => {
  return await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then(
    (res) => res.json()
  );
};
const detDescription = async (id) => {
  return await fetch(`https://pokeapi.co/api/v2/characteristic/${id}`).then(
    (res) => res.json()
  );
};
const detEvolution = async (id) => {
  return await fetch("https://beta.pokeapi.co/graphql/v1beta", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: `{
            gen3_species: pokemon_v2_pokemonspecies(where: {pokemon_v2_pokemons: {pokemon_species_id: 
                {_eq: ${id}}}}, order_by: {id: asc}) {
          
              pokemon_v2_evolutionchain {
                pokemon_v2_pokemonspecies {
                  name
                  id
                }
              }
            }
          }`,
    }),
  }).then((res) => res.json());
};

export { detPokemon, detSpeciePokemon, detEvolution, detDescription };
