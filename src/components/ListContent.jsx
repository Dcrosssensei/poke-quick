import React, { useEffect, useState } from "react";
import Card from "./elements/Card";

import { useSelector } from "react-redux";

import { selectAllTypes } from "../redux/typeSlide";

import { selectAllColor } from "../redux/colorSlide";

import { selectAllGender } from "../redux/genderSlide";

// import { selectPokemon } from "../redux/dataStore";

const ListContent = (search, load) => {
  const [noFilter, setnoFilter] = useState(true);
  const [filtrado, setfiltrado] = useState([]);
  // const dispatch = useDispatch();

  const allTypes = useSelector(selectAllTypes);
  const allColor = useSelector(selectAllColor);
  const allGender = useSelector(selectAllGender);

  const final = [];
  useEffect(() => {
    if (allTypes.length > 0) {
      allTypes.forEach((element) => {
        console.log(element);
        if (element.lenght > 0) {
          final.push(element);
        }
      });
    }
    console.log(final);
  }, [allTypes, allColor, allGender]);

  if (noFilter) {
    return (
      <>
        <section className="Content__Card">
          {search.list.map((item, index) => (
            <Card key={index} id={item.id} name={item.name} />
          ))}
        </section>
      </>
    );
  } else {
    return (
      <>
        <section className="Content__Card">
          {filtrado.map((item, index) => (
            <Card key={index} id={item.id} name={item.name} />
          ))}
        </section>
      </>
    );
  }

  // );
};

export default ListContent;
