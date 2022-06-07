const apiType = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/type");
  return await res.json();
};
const apiColor = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon-color");
  return await res.json();
};
const apiGender = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/gender");
  return await res.json();
};

export { apiType, apiGender, apiColor };
