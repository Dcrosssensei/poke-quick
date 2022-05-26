import React, { useEffect, useState } from "react";

import { selectgender } from "../../redux/filtersSlide";
import { useSelector, useDispatch } from "react-redux";

import {
  all,
  female,
  male,
  genderless,
  undefineds,
} from "../../redux/genderSlide";

const GenderFilter = () => {
  const gender = useSelector(selectgender);
  const dispatch = useDispatch();

  const [typeActive, setTypeActive] = useState({ name: "", active: "" });
  const handleOnChange = (e) => {
    setTypeActive({ name: e.id, active: e.checked });
  };
  useEffect(() => {
    let activeBoolean = typeActive.active;
    let activeIndex = typeActive.name;

    if (activeBoolean === true || activeBoolean === false) {
      switch (activeIndex) {
        case "all":
          dispatch(all(activeBoolean));
          break;
        case "female":
          dispatch(female(activeBoolean));
          break;
        case "male":
          dispatch(male(activeBoolean));
          break;
        case "genderless":
          dispatch(genderless(activeBoolean));
          break;
        case "undefineds":
          dispatch(undefineds(activeBoolean));
          break;

        default:
          break;
      }
    }
  }, [typeActive, dispatch]);

  return (
    <div className="Filter__Gender">
      <h5>Gender:</h5>
      <label>
        <input type="checkbox" name="ALL" id="0" />
        all
      </label>
      {gender.map((item, index) => (
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
      <label>
        <input type="checkbox" name="undefined" id="0" />
        undefined
      </label>
    </div>
  );
};

export default GenderFilter;
