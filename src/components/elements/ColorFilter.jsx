import React from "react";

import { selectColor } from "../../redux/filtersSlide";

import servicesCase from "../../services/servicesCase";
import serviceColor from "../../services/serviceColor";
import { colorList } from "../../services/serviceActiveFilter";

import { useSelector, useDispatch } from "react-redux";

const ColorFilter = () => {
  const dispatch = useDispatch();
  const color = useSelector(selectColor);

  const handleOnChange = (e) => {
    if (e.checked) {
      servicesCase(e.id, dispatch, e.name, colorList, serviceColor);
    }
  };

  return (
    <div className="Filter__Color">
      <h5>Color:</h5>
      <div className="Filter__Color__List">
        {color.map((item, index) => (
          <div key={index} Style={`--color:${item.name}`}>
            <input
              type="checkbox"
              name={item.name}
              id={item.url}
              onClick={(e) => {
                handleOnChange(e.target);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorFilter;
