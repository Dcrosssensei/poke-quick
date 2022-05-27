import {
  normal,
  fighting,
  flying,
  poison,
  ground,
  rock,
  bug,
  ghost,
  steel,
  fire,
  water,
  grass,
  electric,
  psychic,
  ice,
  dragon,
  dark,
  fairy,
  unknown,
  shadow,
} from "../redux/typeSlide";

import {
  black,
  blue,
  brown,
  gray,
  green,
  pink,
  purple,
  red,
  white,
  yellow,
} from "../redux/colorSlide";

import {
  all,
  female,
  male,
  genderless,
  undefineds,
} from "../redux/genderSlide";

const targets = [
  { normal: normal },
  { fighting: fighting },
  { flying: flying },
  { poison: poison },
  { ground: ground },
  { rock: rock },
  { bug: bug },
  { ghost: ghost },
  { steel: steel },
  { fire: fire },
  { water: water },
  { grass: grass },
  { electric: electric },
  { psychic: psychic },
  { ice: ice },
  { dragon: dragon },
  { dark: dark },
  { fairy: fairy },
  { unknown: unknown },
  { shadow: shadow },
  { black: black },
  { blue: blue },
  { brown: brown },
  { gray: gray },
  { green: green },
  { pink: pink },
  { purple: purple },
  { red: red },
  { white: white },
  { yellow: yellow },
  { all: all },
  { female: female },
  { male: male },
  { genderless: genderless },
  { undefineds: undefineds },
];

const servicesCase = (boolean, url, dispatch, action, servicio, select) => {
  let dato = "";
  const target = () => {
    targets.forEach((e) => {
      if (e[action]) {
        dato = e[action];
      }
    });
  };
  target();
  if (boolean === true) {
    select(url, dispatch, dato, servicio);
  } else {
    dispatch(dato([]));
  }
};

export default servicesCase;
