const typeList = async (url) => {
  const res = await fetch(`${url}`);
  const data = await res.json();
  return data.pokemon;
};
const genderList = async (url) => {
  const res = await fetch(`${url}`);
  const data = await res.json();
  return data.pokemon_species_details;
};
const colorList = async (url) => {
  const res = await fetch(`${url}`);
  const data = await res.json();
  return data.pokemon_species;
};

export { typeList, genderList, colorList };
