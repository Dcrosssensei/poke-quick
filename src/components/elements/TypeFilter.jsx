import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectType } from "../../redux/filtersSlide";

import servicesCase from "../../services/servicesCase";
import serviceList from "../../services/serviceList";
import { typeList } from "../../services/serviceActiveFilter";

const TypeFilter = () => {
  const dispatch = useDispatch();
  const type = useSelector(selectType);

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
        case "normal":
          url = type[0].url;
          servicesCase(
            activeBoolean,
            url,
            dispatch,
            activeIndex,
            typeList,
            serviceList
          );
          break;
        case "fighting":
          url = type[1].url;
          servicesCase(
            activeBoolean,
            url,
            dispatch,
            activeIndex,
            typeList,
            serviceList
          );
          break;
        case "flying":
          url = type[2].url;
          servicesCase(
            activeBoolean,
            url,
            dispatch,
            activeIndex,
            typeList,
            serviceList
          );
          break;
        case "poison":
          url = type[3].url;
          servicesCase(
            activeBoolean,
            url,
            dispatch,
            activeIndex,
            typeList,
            serviceList
          );
          break;
        case "ground":
          url = type[4].url;
          servicesCase(
            activeBoolean,
            url,
            dispatch,
            activeIndex,
            typeList,
            serviceList
          );
          break;
        case "rock":
          url = type[5].url;
          servicesCase(
            activeBoolean,
            url,
            dispatch,
            activeIndex,
            typeList,
            serviceList
          );
          break;
        case "bug":
          url = type[6].url;
          servicesCase(
            activeBoolean,
            url,
            dispatch,
            activeIndex,
            typeList,
            serviceList
          );
          break;
        case "ghost":
          url = type[7].url;
          servicesCase(
            activeBoolean,
            url,
            dispatch,
            activeIndex,
            typeList,
            serviceList
          );
          break;
        case "steel":
          url = type[8].url;
          servicesCase(
            activeBoolean,
            url,
            dispatch,
            activeIndex,
            typeList,
            serviceList
          );
          break;
        case "fire":
          url = type[9].url;
          servicesCase(
            activeBoolean,
            url,
            dispatch,
            activeIndex,
            typeList,
            serviceList
          );
          break;
        case "water":
          url = type[10].url;
          servicesCase(
            activeBoolean,
            url,
            dispatch,
            activeIndex,
            typeList,
            serviceList
          );
          break;
        case "grass":
          url = type[11].url;
          servicesCase(
            activeBoolean,
            url,
            dispatch,
            activeIndex,
            typeList,
            serviceList
          );
          break;
        case "electric":
          url = type[12].url;
          servicesCase(
            activeBoolean,
            url,
            dispatch,
            activeIndex,
            typeList,
            serviceList
          );
          break;
        case "psychic":
          url = type[13].url;
          servicesCase(
            activeBoolean,
            url,
            dispatch,
            activeIndex,
            typeList,
            serviceList
          );
          break;
        case "ice":
          url = type[14].url;
          servicesCase(
            activeBoolean,
            url,
            dispatch,
            activeIndex,
            typeList,
            serviceList
          );
          break;
        case "dragon":
          url = type[15].url;
          servicesCase(
            activeBoolean,
            url,
            dispatch,
            activeIndex,
            typeList,
            serviceList
          );
          break;
        case "dark":
          url = type[16].url;
          servicesCase(
            activeBoolean,
            url,
            dispatch,
            activeIndex,
            typeList,
            serviceList
          );
          break;
        case "fairy":
          url = type[17].url;
          servicesCase(
            activeBoolean,
            url,
            dispatch,
            activeIndex,
            typeList,
            serviceList
          );
          break;
        case "unknown":
          url = type[18].url;
          servicesCase(
            activeBoolean,
            url,
            dispatch,
            activeIndex,
            typeList,
            serviceList
          );
          break;
        case "shadow":
          url = type[19].url;
          servicesCase(
            activeBoolean,
            url,
            dispatch,
            activeIndex,
            typeList,
            serviceList
          );
          break;

        default:
          break;
      }
    }
  }, [typeActive, dispatch, type]);

  return (
    <div className="Filter__Gender">
      <h5>Type:</h5>

      {type.map((item, index) => (
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

export default TypeFilter;
