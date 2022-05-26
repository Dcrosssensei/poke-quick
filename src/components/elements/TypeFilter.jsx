import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectType } from "../../redux/filtersSlide";
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
} from "../../redux/typeSlide";

const TypeFilter = () => {
  const dispatch = useDispatch();
  const type = useSelector(selectType);

  const [typeActive, setTypeActive] = useState({ name: "", active: "" });
  const handleOnChange = (e) => {
    setTypeActive({ name: e.id, active: e.checked });
  };
  useEffect(() => {
    let activeBoolean = typeActive.active;
    let activeIndex = typeActive.name;

    if (activeBoolean === true || activeBoolean === false) {
      switch (activeIndex) {
        case "normal":
          dispatch(normal(activeBoolean));
          break;
        case "fighting":
          dispatch(fighting(activeBoolean));
          break;
        case "flying":
          dispatch(flying(activeBoolean));
          break;
        case "poison":
          dispatch(poison(activeBoolean));
          break;
        case "ground":
          dispatch(ground(activeBoolean));
          break;
        case "rock":
          dispatch(rock(activeBoolean));
          break;
        case "bug":
          dispatch(bug(activeBoolean));
          break;
        case "ghost":
          dispatch(ghost(activeBoolean));
          break;
        case "steel":
          dispatch(steel(activeBoolean));
          break;
        case "fire":
          dispatch(fire(activeBoolean));
          break;
        case "water":
          dispatch(water(activeBoolean));
          break;
        case "grass":
          dispatch(grass(activeBoolean));
          break;
        case "electric":
          dispatch(electric(activeBoolean));
          break;
        case "psychic":
          dispatch(psychic(activeBoolean));
          break;
        case "ice":
          dispatch(ice(activeBoolean));
          break;
        case "dragon":
          dispatch(dragon(activeBoolean));
          break;
        case "dark":
          dispatch(dark(activeBoolean));
          break;
        case "fairy":
          dispatch(fairy(activeBoolean));
          break;
        case "unknown":
          dispatch(unknown(activeBoolean));
          break;
        case "shadow":
          dispatch(shadow(activeBoolean));
          break;

        default:
          break;
      }
    }
  }, [typeActive, dispatch]);

  return (
    <div className="Filter__Gender">
      <h5>Type:</h5>

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
  );
};

export default TypeFilter;
