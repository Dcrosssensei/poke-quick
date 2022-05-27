import React, { useEffect } from "react";

import { selectColor } from "../../redux/filtersSlide";
import { COLORS } from "../../redux/activeSlide";

import servicesCase from "../../services/servicesCase";
import serviceColor from "../../services/serviceColor";
import { colorList } from "../../services/serviceActiveFilter";

import { useSelector, useDispatch } from "react-redux";

const ColorFilter = () => {
  const dispatch = useDispatch();
  const color = useSelector(selectColor);

  const handleOnChange = (e) => {
    dispatch(COLORS(e.id));
  };

  useEffect(() => {
    let url = "";

    url = "https://pokeapi.co/api/v2/pokemon-color/1";
    servicesCase(url, dispatch, "black", colorList, serviceColor);

    url = "https://pokeapi.co/api/v2/pokemon-color/2";
    servicesCase(url, dispatch, "blue", colorList, serviceColor);

    url = "https://pokeapi.co/api/v2/pokemon-color/3";
    servicesCase(url, dispatch, "brown", colorList, serviceColor);

    url = "https://pokeapi.co/api/v2/pokemon-color/4";
    servicesCase(url, dispatch, "gray", colorList, serviceColor);

    url = "https://pokeapi.co/api/v2/pokemon-color/5";
    servicesCase(url, dispatch, "green", colorList, serviceColor);

    url = "https://pokeapi.co/api/v2/pokemon-color/6";
    servicesCase(url, dispatch, "pink", colorList, serviceColor);

    url = "https://pokeapi.co/api/v2/pokemon-color/7";
    servicesCase(url, dispatch, "purple", colorList, serviceColor);

    url = "https://pokeapi.co/api/v2/pokemon-color/8";
    servicesCase(url, dispatch, "red", colorList, serviceColor);

    url = "https://pokeapi.co/api/v2/pokemon-color/9";
    servicesCase(url, dispatch, "white", colorList, serviceColor);

    url = "https://pokeapi.co/api/v2/pokemon-color/10";
    servicesCase(url, dispatch, "yellow", colorList, serviceColor);
  }, [dispatch, color]);

  return (
    <div className="Filter__Color">
      <h5>Color:</h5>
      <div className="Filter__Color__List">
        {color.map((item, index) => (
          <label
            key={index}
            htmlFor={item.name}
            onChange={(e) => {
              handleOnChange(e.target);
            }}
          >
            <input type="checkbox" name={item.name} id={item.name} />
            <span Style={`--color:${item.name}`} />
          </label>
        ))}
      </div>
    </div>
  );
};

export default ColorFilter;
