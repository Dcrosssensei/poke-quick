import React, { useEffect } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { selectPokemon, POKEMON } from "../redux/dataStore";

import { apiPokedex } from "../services/serviceApi";

export const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const check = useSelector(selectPokemon);

  useEffect(() => {
    if (Object.keys(check).length === 0) {
      apiPokedex().then((resp) => {
        const datos = resp;
        dispatch(POKEMON(datos.pokemon_entries));
      });
    }
  });

  return <div className="Layout"> {children}</div>;
};
