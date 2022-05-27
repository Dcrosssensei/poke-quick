const typeList = (url) => {
  return fetch(`${url}`).then((res) => res.json().then((data) => data.pokemon));
};
const genderList = (url) => {
  return fetch(`${url}`).then((res) =>
    res.json().then((data) => data.pokemon_species_details)
  );
};
const colorList = (url) => {
  return fetch(`${url}`).then((res) =>
    res.json().then((data) => data.pokemon_species)
  );
};

export { typeList, genderList, colorList };
