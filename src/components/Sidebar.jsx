import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { selectColor, selectType, selectgender } from "../redux/filtersSlide";

const Sidebar = () => {
  const color = useSelector(selectColor);
  const type = useSelector(selectType);
  const gender = useSelector(selectgender);

  useEffect(() => {});

  return (
    <div className="Sidebar">
      <h4>filter</h4>
      <hr />
      <div className="Sidebar__Filter">
        <div className="Filter__Type">
          <h5>Type:</h5>
          {type.map((item, index) => (
            <label key={index} htmlFor={item.name}>
              <input type="checkbox" name={item.name} id={item.name} />
              {item.name}
            </label>
          ))}
        </div>
        <hr />
        <div className="Filter__Color">
          <h5>Color:</h5>
          {color.map((item, index) => (
            <label
              key={index}
              htmlFor={item.name}
              Style={`--color:${item.name}`}
            >
              <input type="checkbox" name={item.name} id={item.name} />
            </label>
          ))}
        </div>
        <hr />
        <div className="Filter__Gender">
          <h5>Gender:</h5>
          {gender.map((item, index) => (
            <label key={index} htmlFor={item.name}>
              <input type="checkbox" name={item.name} id={item.name} />
              {item.name}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
