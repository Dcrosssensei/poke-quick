import React, { useEffect } from "react";
import Card from "./elements/Card";

import { useSelector } from "react-redux";

import {
  selectNormal,
  selectfighting,
  selectflying,
  selectpoison,
  selectground,
  selectrock,
  selectbug,
  selectghost,
  selectsteel,
  selectfire,
  selectwater,
  selectgrass,
  selectelectric,
  selectpsychic,
  selectice,
  selectdragon,
  selectdark,
  selectfairy,
  selectunknown,
  selectshadow,
} from "../redux/typeSlide";

const ListContent = (search, load) => {
  //observables
  const normals = useSelector(selectNormal);
  const fighting = useSelector(selectfighting);
  const flying = useSelector(selectflying);
  const poison = useSelector(selectpoison);
  const ground = useSelector(selectground);
  const rock = useSelector(selectrock);
  const bug = useSelector(selectbug);
  const ghost = useSelector(selectghost);
  const steel = useSelector(selectsteel);
  const fire = useSelector(selectfire);
  const water = useSelector(selectwater);
  const grass = useSelector(selectgrass);
  const electric = useSelector(selectelectric);
  const psychic = useSelector(selectpsychic);
  const ice = useSelector(selectice);
  const dragon = useSelector(selectdragon);
  const dark = useSelector(selectdark);
  const fairy = useSelector(selectfairy);
  const unknown = useSelector(selectunknown);
  const shadow = useSelector(selectshadow);

  const normalLoaded = normals;

  useEffect(() => {
    console.log(normalLoaded);
  }, [normalLoaded]);

  return (
    <>
      <section className="Content__Card">
        {search.list.map((item, index) => (
          <Card key={index} id={item.id} name={item.name} />
        ))}
      </section>
      {/* <section className="Content__Card">
        {normalLoaded.map((item, index) => (
          <Card key={index} id={item.id} name={item.name} />
        ))}
      </section> */}
    </>
  );
};

export default ListContent;
