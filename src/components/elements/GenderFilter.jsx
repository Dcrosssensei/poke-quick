import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectgender } from "../../redux/filtersSlide";

import servicesCase from "../../services/servicesCase";
import { genderList } from "../../services/serviceActiveFilter";
import serviceGender from "../../services/serviceGender";

const GenderFilter = () => {
  const gender = useSelector(selectgender);
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    if (e.checked) {
      servicesCase(e.id, dispatch, e.name, genderList, serviceGender);
    }
  };

  return (
    <div className="Filter__Gender">
      <h5>Gender:</h5>
      <div className="Filter__Gender__List">
        {gender.map((item, index) => (
          <label
            key={index}
            htmlFor={item.name}
            onChange={(e) => {
              handleOnChange(e.target);
            }}
          >
            <input type="checkbox" name={item.name} id={item.url} />
            {item.name}
          </label>
        ))}
      </div>
    </div>
  );
};

export default GenderFilter;
