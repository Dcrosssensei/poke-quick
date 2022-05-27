import React, { useEffect, useState } from "react";

import { selectgender } from "../../redux/filtersSlide";
import { useSelector, useDispatch } from "react-redux";

import servicesCase from "../../services/servicesCase";
import { genderList } from "../../services/serviceActiveFilter";
import serviceGender from "../../services/serviceGender";

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
    let url = "";

    if (activeBoolean === true || activeBoolean === false) {
      switch (activeIndex) {
        case "female":
          url = gender[0].url;
          servicesCase(
            activeBoolean,
            url,
            dispatch,
            activeIndex,
            genderList,
            serviceGender
          );
          break;
        case "male":
          url = gender[1].url;
          servicesCase(
            activeBoolean,
            url,
            dispatch,
            activeIndex,
            genderList,
            serviceGender
          );
          break;
        case "genderless":
          url = gender[2].url;
          servicesCase(
            activeBoolean,
            url,
            dispatch,
            activeIndex,
            genderList,
            serviceGender
          );
          break;

        default:
          break;
      }
    }
  }, [typeActive, dispatch, gender]);

  return (
    <div className="Filter__Gender">
      <h5>Gender:</h5>

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
    </div>
  );
};

export default GenderFilter;
