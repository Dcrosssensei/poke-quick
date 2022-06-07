import React, { useEffect, useState } from "react";
import Card from "./elements/Card";

import { useDispatch, useSelector } from "react-redux";
import {
  selectTypes,
  selectColors,
  selectgenders,
  selectTypesA,
  selectColorsA,
  selectgendersA,
  TYPES,
  COLORS,
  GENDERS,
} from "../redux/activeSlide";

import {
  selectNormal,
  selectfighting,
  selectflying,
  selectpoison,
  selectground,
  selectrock,
  selectbug,
  selectghost,
  selectsteel,
  selectfire,
  selectwater,
  selectgrass,
  selectelectric,
  selectpsychic,
  selectice,
  selectdragon,
  selectdark,
  selectfairy,
  selectunknown,
  selectshadow,
  selectall,
} from "../redux/typeSlide";

import {
  selectBlack,
  selectblue,
  selectbrown,
  selectgray,
  selectgreen,
  selectpink,
  selectpurple,
  selectred,
  selectwhite,
  selectyellow,
} from "../redux/colorSlide";

import { selectFemale, selectMale, selectGeness } from "../redux/genderSlide";

import { selectPokemon } from "../redux/dataStore";

const ListContent = (search, load) => {
  const [noFilter, setnoFilter] = useState(true);
  const [filtrado, setfiltrado] = useState([]);
  const dispatch = useDispatch();

  const Ftype = useSelector(selectTypes);
  const FtypeA = useSelector(selectTypesA);
  const Fcolor = useSelector(selectColors);
  const FcolorA = useSelector(selectColorsA);
  const Fgender = useSelector(selectgenders);
  const FgenderA = useSelector(selectgendersA);
  const pokeImg = useSelector(selectPokemon);

  const Normal = useSelector(selectNormal);
  const fighting = useSelector(selectfighting);
  const flying = useSelector(selectflying);
  const poison = useSelector(selectpoison);
  const ground = useSelector(selectground);
  const rock = useSelector(selectrock);
  const bug = useSelector(selectbug);
  const ghost = useSelector(selectghost);
  const steel = useSelector(selectsteel);
  const fire = useSelector(selectfire);
  const water = useSelector(selectwater);
  const grass = useSelector(selectgrass);
  const electric = useSelector(selectelectric);
  const psychic = useSelector(selectpsychic);
  const ice = useSelector(selectice);
  const dragon = useSelector(selectdragon);
  const dark = useSelector(selectdark);
  const fairy = useSelector(selectfairy);
  const unknown = useSelector(selectunknown);
  const shadow = useSelector(selectshadow);

  const Black = useSelector(selectBlack);
  const blue = useSelector(selectblue);
  const brown = useSelector(selectbrown);
  const gray = useSelector(selectgray);
  const green = useSelector(selectgreen);
  const pink = useSelector(selectpink);
  const purple = useSelector(selectpurple);
  const red = useSelector(selectred);
  const white = useSelector(selectwhite);
  const yellow = useSelector(selectyellow);

  const Female = useSelector(selectFemale);
  const Male = useSelector(selectMale);
  const Geness = useSelector(selectGeness);

  const all = useSelector(selectall);

  const FtsType = {
    normal: Normal,
    fighting: fighting,
    flying: flying,
    poison: poison,
    ground: ground,
    rock: rock,
    bug: bug,
    ghost: ghost,
    steel: steel,
    fire: fire,
    water: water,
    grass: grass,
    electric: electric,
    psychic: psychic,
    ice: ice,
    dragon: dragon,
    dark: dark,
    fairy: fairy,
    unknown: unknown,
    shadow: shadow,
    black: Black,
    blue: blue,
    brown: brown,
    gray: gray,
    green: green,
    pink: pink,
    purple: purple,
    red: red,
    white: white,
    yellow: yellow,
    female: Female,
    male: Male,
    genderless: Geness,
  };

  useEffect(() => {
    console.log(FtsType);

    // console.log(all);
    // if (FtypeA || FcolorA || FgenderA){
    // }
    // if (FtypeA) {
    //   setnoFilter(false);
    //   let array = FtsType[Ftype];
    //   let dato = [];
    //   for (let i = 0; i < array.length; i++) {
    //     dato.push(array[i].name);
    //   }
    //   let x = pokeImg.filter((item) => {
    //     return dato.includes(item.name);
    //   });
    //   setfiltrado(x);
    // }
    // if (FcolorA) {
    //   setnoFilter(false);
    //   let array = FtsType[Fcolor];
    //   let dato = [];
    //   for (let i = 0; i < array.length; i++) {
    //     dato.push(array[i].name);
    //   }
    //   let x = pokeImg.filter((item) => {
    //     return dato.includes(item.name);
    //   });
    //   setfiltrado(x);
    // }
    // if (FgenderA) {
    //   setnoFilter(false);
    //   let array = FtsType[Fgender];
    //   let dato = [];
    //   for (let i = 0; i < array.length; i++) {
    //     dato.push(array[i].name);
    //   }
    //   let x = pokeImg.filter((item) => {
    //     return dato.includes(item.name);
    //   });
    //   setfiltrado(x);
    // }
  }, [Ftype, Fcolor, Fgender, FtypeA, FcolorA, FgenderA]);

  if (noFilter) {
    return (
      <>
        <section className="Content__Card">
          {search.list.map((item, index) => (
            <Card key={index} id={item.id} name={item.name} />
          ))}
        </section>
      </>
    );
  } else {
    return (
      <>
        <section className="Content__Card">
          {filtrado.map((item, index) => (
            <Card key={index} id={item.id} name={item.name} />
          ))}
        </section>
      </>
    );
  }

  // );
};

export default ListContent;
