import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectType } from "../../redux/filtersSlide";
import { TYPES, ATYPES } from "../../redux/activeSlide";

import servicesCase from "../../services/servicesCase";
import serviceList from "../../services/serviceList";
import { typeList } from "../../services/serviceActiveFilter";

const TypeFilter = () => {
  const dispatch = useDispatch();
  const type = useSelector(selectType);

  const handleOnChange = (e) => {
    dispatch(TYPES(e.id));
    dispatch(ATYPES(e.checked));
  };

  useEffect(() => {
    setTimeout(() => {
      let url = "";
      url = "https://pokeapi.co/api/v2/type/1/";
      servicesCase(url, dispatch, "normal", typeList, serviceList);

      url = "https://pokeapi.co/api/v2/type/2/";
      servicesCase(url, dispatch, "fighting", typeList, serviceList);

      url = "https://pokeapi.co/api/v2/type/3/";
      servicesCase(url, dispatch, "flying", typeList, serviceList);

      url = "https://pokeapi.co/api/v2/type/4/";
      servicesCase(url, dispatch, "poison", typeList, serviceList);

      url = "https://pokeapi.co/api/v2/type/5/";
      servicesCase(url, dispatch, "ground", typeList, serviceList);

      url = "https://pokeapi.co/api/v2/type/6/";
      servicesCase(url, dispatch, "rock", typeList, serviceList);

      url = "https://pokeapi.co/api/v2/type/7/";
      servicesCase(url, dispatch, "bug", typeList, serviceList);

      url = "https://pokeapi.co/api/v2/type/8/";
      servicesCase(url, dispatch, "ghost", typeList, serviceList);

      url = "https://pokeapi.co/api/v2/type/9/";
      servicesCase(url, dispatch, "steel", typeList, serviceList);

      url = "https://pokeapi.co/api/v2/type/10/";
      servicesCase(url, dispatch, "fire", typeList, serviceList);

      url = "https://pokeapi.co/api/v2/type/11/";
      servicesCase(url, dispatch, "water", typeList, serviceList);

      url = "https://pokeapi.co/api/v2/type/12/";
      servicesCase(url, dispatch, "grass", typeList, serviceList);

      url = "https://pokeapi.co/api/v2/type/13/";
      servicesCase(url, dispatch, "electric", typeList, serviceList);

      url = "https://pokeapi.co/api/v2/type/14/";
      servicesCase(url, dispatch, "psychic", typeList, serviceList);

      url = "https://pokeapi.co/api/v2/type/15/";
      servicesCase(url, dispatch, "ice", typeList, serviceList);

      url = "https://pokeapi.co/api/v2/type/16/";
      servicesCase(url, dispatch, "dragon", typeList, serviceList);

      url = "https://pokeapi.co/api/v2/type/17/";
      servicesCase(url, dispatch, "dark", typeList, serviceList);

      url = "https://pokeapi.co/api/v2/type/18/";
      servicesCase(url, dispatch, "fairy", typeList, serviceList);

      url = "https://pokeapi.co/api/v2/type/10001/";
      servicesCase(url, dispatch, "unknown", typeList, serviceList);

      url = "https://pokeapi.co/api/v2/type/10002/";
      servicesCase(url, dispatch, "shadow", typeList, serviceList);
    }, 1500);
  }, [dispatch, type]);

  return (
    <div className="Filter__Type">
      <h5>Type:</h5>
      <div className="Filter__Type__List">
        {type.map((item, index) => (
          <label
            key={index}
            htmlFor={item.name}
            onChange={(e) => {
              handleOnChange(e.target);
            }}
          >
            <input type="checkbox" name={item.name} id={item.name} />
            {item.name}
          </label>
        ))}
      </div>
    </div>
  );
};

export default TypeFilter;
