import React, { useEffect, useState } from "react";

import { selectColor } from "../../redux/filtersSlide";

import { useSelector, useDispatch } from "react-redux";
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
} from "../../redux/colorSlide";

const ColorFilter = () => {
  const dispatch = useDispatch();
  const color = useSelector(selectColor);

  const [typeActive, setTypeActive] = useState({ name: "", active: "" });
  const handleOnChange = (e) => {
    setTypeActive({ name: e.id, active: e.checked });
  };
  useEffect(() => {
    let activeBoolean = typeActive.active;
    let activeIndex = typeActive.name;

    if (activeBoolean === true || activeBoolean === false) {
      switch (activeIndex) {
        case "black":
          dispatch(black(activeBoolean));
          break;
        case "blue":
          dispatch(blue(activeBoolean));
          break;
        case "brown":
          dispatch(brown(activeBoolean));
          break;
        case "gray":
          dispatch(gray(activeBoolean));
          break;
        case "green":
          dispatch(green(activeBoolean));
          break;
        case "pink":
          dispatch(pink(activeBoolean));
          break;
        case "purple":
          dispatch(purple(activeBoolean));
          break;
        case "red":
          dispatch(red(activeBoolean));
          break;
        case "white":
          dispatch(white(activeBoolean));
          break;
        case "yellow":
          dispatch(yellow(activeBoolean));
          break;

        default:
          break;
      }
    }
  }, [typeActive, dispatch]);

  return (
    <div className="Filter__Color">
      <h5>Color:</h5>
      {color.map((item, index) => (
        <label
          key={index}
          htmlFor={item.name}
          onChange={(e) => {
            handleOnChange(e.target);
          }}
          Style={`--color:${item.name}`}
        >
          <input type="checkbox" name={item.name} id={item.name} />
        </label>
      ))}
    </div>
  );
};

export default ColorFilter;
