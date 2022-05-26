import React, { useEffect } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { selectPokemon, POKEMON } from "../redux/dataStore";
import {
  selectColor,
  selectType,
  selectgender,
  TYPE,
  COLOR,
  GENDER,
} from "../redux/filtersSlide";

//services
import { apiPokedex } from "../services/serviceApi";
import { apiColor, apiGender, apiType } from "../services/serviceFilters";

export const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const dbCheck = useSelector(selectPokemon);
  const colorCheck = useSelector(selectColor);
  const typeCheck = useSelector(selectType);
  const genderCheck = useSelector(selectgender);

  useEffect(() => {
    if (Object.keys(dbCheck).length === 0) {
      apiPokedex().then((resp) => {
        const datos = resp;
        const data = datos.pokemon_entries;
        const payload = [];

        data.forEach((e) => {
          let packet = {};
          packet.id = e.entry_number;
          packet.name = e.pokemon_species.name;
          payload.push(packet);
        });

        dispatch(POKEMON(payload));
      });
    }

    if (Object.keys(colorCheck).length === 0) {
      apiColor().then((resp) => {
        const datos = resp;
        const data = datos.results;
        dispatch(COLOR(data));
      });
    }
    if (Object.keys(typeCheck).length === 0) {
      apiType().then((resp) => {
        const datos = resp;
        const data = datos.results;
        dispatch(TYPE(data));
      });
    }
    if (Object.keys(genderCheck).length === 0) {
      apiGender().then((resp) => {
        const datos = resp;
        const data = datos.results;
        dispatch(GENDER(data));
      });
    }
  });

  return <div className="Layout"> {children}</div>;
};
