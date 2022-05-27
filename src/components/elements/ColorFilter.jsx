import React, { useEffect, useState } from "react";

import { selectColor } from "../../redux/filtersSlide";

import servicesCase from "../../services/servicesCase";
import serviceColor from "../../services/serviceColor";
import { colorList } from "../../services/serviceActiveFilter";

import { useSelector, useDispatch } from "react-redux";

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
    let url = "";

    if (activeBoolean === true || activeBoolean === false) {
      switch (activeIndex) {
        case "black":
          url = color[0].url;
          servicesCase(
            activeBoolean,
            url,
            dispatch,
            activeIndex,
            colorList,
            serviceColor
          );
          break;
        case "blue":
          url = color[1].url;
          servicesCase(
            activeBoolean,
            url,
            dispatch,
            activeIndex,
            colorList,
            serviceColor
          );
          break;
        case "brown":
          url = color[2].url;
          servicesCase(
            activeBoolean,
            url,
            dispatch,
            activeIndex,
            colorList,
            serviceColor
          );
          break;
        case "gray":
          url = color[3].url;
          servicesCase(
            activeBoolean,
            url,
            dispatch,
            activeIndex,
            colorList,
            serviceColor
          );
          break;
        case "green":
          url = color[4].url;
          servicesCase(
            activeBoolean,
            url,
            dispatch,
            activeIndex,
            colorList,
            serviceColor
          );
          break;
        case "pink":
          url = color[5].url;
          servicesCase(
            activeBoolean,
            url,
            dispatch,
            activeIndex,
            colorList,
            serviceColor
          );
          break;
        case "purple":
          url = color[6].url;
          servicesCase(
            activeBoolean,
            url,
            dispatch,
            activeIndex,
            colorList,
            serviceColor
          );
          break;
        case "red":
          url = color[7].url;
          servicesCase(
            activeBoolean,
            url,
            dispatch,
            activeIndex,
            colorList,
            serviceColor
          );
          break;
        case "white":
          url = color[8].url;
          servicesCase(
            activeBoolean,
            url,
            dispatch,
            activeIndex,
            colorList,
            serviceColor
          );
          break;
        case "yellow":
          url = color[9].url;
          servicesCase(
            activeBoolean,
            url,
            dispatch,
            activeIndex,
            colorList,
            serviceColor
          );
          break;

        default:
          break;
      }
    }
  }, [typeActive, dispatch, color]);

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
