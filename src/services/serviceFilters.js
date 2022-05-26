const apiType = () => {
  return fetch("https://pokeapi.co/api/v2/type").then((res) => res.json());
};
const apiColor = () => {
  return fetch("https://pokeapi.co/api/v2/pokemon-color").then((res) =>
    res.json()
  );
};
const apiGender = () => {
  return fetch("https://pokeapi.co/api/v2/gender").then((res) => res.json());
};

export { apiType, apiGender, apiColor };
