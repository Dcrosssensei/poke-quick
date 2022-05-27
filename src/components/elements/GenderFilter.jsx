import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectgender } from "../../redux/filtersSlide";
import { GENDERS } from "../../redux/activeSlide";

import servicesCase from "../../services/servicesCase";
import { genderList } from "../../services/serviceActiveFilter";
import serviceGender from "../../services/serviceGender";

const GenderFilter = () => {
  const gender = useSelector(selectgender);
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    dispatch(GENDERS(e.id));
  };
  useEffect(() => {
    let url = "";
    url = "https://pokeapi.co/api/v2/gender/1/";
    servicesCase(url, dispatch, "female", genderList, serviceGender);

    url = "https://pokeapi.co/api/v2/gender/2/";
    servicesCase(url, dispatch, "male", genderList, serviceGender);

    url = "https://pokeapi.co/api/v2/gender/3/";
    servicesCase(url, dispatch, "genderless", genderList, serviceGender);
  });

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
            <input type="checkbox" name={item.name} id={item.name} />
            {item.name}
          </label>
        ))}
      </div>
    </div>
  );
};

export default GenderFilter;
