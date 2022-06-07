import React from "react";

import { selectColor } from "../../redux/filtersSlide";
import { COLORS, ACOLORS } from "../../redux/activeSlide";

import servicesCase from "../../services/servicesCase";
import serviceColor from "../../services/serviceColor";
import { colorList } from "../../services/serviceActiveFilter";

import { useSelector, useDispatch } from "react-redux";

const ColorFilter = () => {
  const dispatch = useDispatch();
  const color = useSelector(selectColor);

  const handleOnChange = (e) => {
    dispatch(COLORS(e.name));
    dispatch(ACOLORS(e.checked));
    if (e.checked) {
      servicesCase(e.id, dispatch, e.name, colorList, serviceColor);
    }
  };

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
            <input type="checkbox" name={item.name} id={item.url} />
            <span Style={`--color:${item.name}`} />
          </label>
        ))}
      </div>
    </div>
  );
};

export default ColorFilter;
