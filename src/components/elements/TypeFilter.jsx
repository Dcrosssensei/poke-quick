import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectType } from "../../redux/filtersSlide";

import servicesCase from "../../services/servicesCase";
import serviceList from "../../services/serviceList";
import { typeList } from "../../services/serviceActiveFilter";

const TypeFilter = () => {
  const dispatch = useDispatch();
  const type = useSelector(selectType);

  const handleOnChange = (e) => {
    if (e.checked) {
      servicesCase(e.id, dispatch, e.name, typeList, serviceList);
    }
  };

  return (
    <div className="Filter__Type">
      <h5>Type:</h5>
      <div className="Filter__Type__List">
        {type.map((item, index) => (
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

export default TypeFilter;
