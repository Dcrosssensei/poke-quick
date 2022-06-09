import React, { useEffect, useState } from "react";
import Card from "./elements/Card";

import { useSelector, useDispatch } from "react-redux";

import { selectAllTypes } from "../redux/typeSlide";

import { selectAllColor } from "../redux/colorSlide";

import { selectAllGender } from "../redux/genderSlide";

import { POKEMON_FILTERED, selectPokemonFiltered } from "../redux/dataStore";

const ListContent = (search, load) => {
  const dispatch = useDispatch();

  const allTypes = useSelector(selectAllTypes);
  const allColor = useSelector(selectAllColor);
  const allGender = useSelector(selectAllGender);
  const pokemonFiltered = useSelector(selectPokemonFiltered);

  const [pokemap, setPokemap] = useState([]);

  useEffect(() => {
    setPokemap(pokemonFiltered.map((item) => [item.id, item]));
  }, [pokemonFiltered]);

  useEffect(() => {
    let long = pokemap.length;

    Object.entries(allTypes).forEach(([key, value]) => {
      let longValues = value.length;

      if (value.length > 0) {
        let filtertArray = [];
        if (long < 800 && long !== longValues) {
          for (let i = 0; i < long; i++) {
            let id;
            if (value[i] !== undefined) {
              id = value[i].id;
            }
            let newAray = pokemap.reduce((acc, nxtvalue) => {
              if (nxtvalue[0] === id) {
                acc.push(nxtvalue[1]);
              }
              return acc;
            }, []);
            filtertArray.push(...newAray);
          }
          dispatch(POKEMON_FILTERED(filtertArray));
        } else if (long !== longValues) {
          dispatch(POKEMON_FILTERED(value));
        }
      }
    });
  }, [allTypes]);

  useEffect(() => {
    let long = pokemap.length;

    Object.entries(allColor).forEach(([key, value]) => {
      let longValues = value.length;

      if (value.length > 0) {
        let filtertArray = [];
        if (long < 800 && long !== longValues) {
          for (let i = 0; i < long; i++) {
            let id;
            if (value[i] !== undefined) {
              id = value[i].id;
            }
            let newAray = pokemap.reduce((acc, nxtvalue) => {
              if (nxtvalue[0] === id) {
                acc.push(nxtvalue[1]);
              }
              return acc;
            }, []);
            filtertArray.push(...newAray);
          }
          dispatch(POKEMON_FILTERED(filtertArray));
        } else if (long !== longValues) {
          dispatch(POKEMON_FILTERED(value));
        }
      }
    });
  }, [allColor]);

  useEffect(() => {
    let long = pokemap.length;

    Object.entries(allGender).forEach(([key, value]) => {
      let longValues = value.length;

      if (value.length > 0) {
        let filtertArray = [];
        if (long < 800 && long !== longValues) {
          for (let i = 0; i < long; i++) {
            let id;
            if (value[i] !== undefined) {
              id = value[i].id;
            }
            let newAray = pokemap.reduce((acc, nxtvalue) => {
              if (nxtvalue[0] === id) {
                acc.push(nxtvalue[1]);
              }
              return acc;
            }, []);
            filtertArray.push(...newAray);
          }
          dispatch(POKEMON_FILTERED(filtertArray));
        } else if (long !== longValues) {
          dispatch(POKEMON_FILTERED(value));
        }
      }
    });
  }, [allGender]);

  if (pokemonFiltered.length !== 0) {
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
        <h1>no encontardo</h1>
      </>
    );
  }

  // );
};

export default ListContent;
