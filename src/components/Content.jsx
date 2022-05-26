import React, { useEffect, useState } from "react";
import Card from "./elements/Card";

//redux imports
import { selectPokemon } from "../redux/dataStore";
import { selectSearch } from "../redux/searchSlide";
// import { selectType } from "../redux/filtersSlide";

import { useSelector } from "react-redux";

const Content = () => {
  //redux
  const pokeImg = useSelector(selectPokemon);
  const searchData = useSelector(selectSearch);
  // const selectTypes = useSelector(selectType);

  //States
  const [imgLoaded, setImgLoaded] = useState(20);
  const [sorted, setsorted] = useState([]);

  // const pokemons = pokeImg.slice(0, imgLoaded);
  const search = sorted.slice(0, imgLoaded);

  const handleLoad = () => {
    if (imgLoaded < pokeImg.length) {
      setImgLoaded(imgLoaded + 20);
    }
  };

  useEffect(() => {
    let sortedCopy = [...pokeImg];
    setsorted(sortedCopy);
    const regExpL = new RegExp(/\w/g);
    const regExpN = new RegExp(/[0-9]/g);

    if (regExpL.test(searchData)) {
      let sortedFix = sortedCopy.filter((e) => {
        return e.name.includes(searchData);
      });
      setsorted(sortedFix);
    }
    if (regExpN.test(searchData)) {
      let sortedFix = sortedCopy.filter((e) => {
        let num = parseInt(searchData);
        return e.id === num;
      });
      setsorted(sortedFix);
    }
  }, [pokeImg, searchData]);

  return (
    <div className="Content">
      <p>Choose a pokemon to get more information</p>
      {/* <section className="Content__Card">
        {pokemons.map((item, index) => (
          <Card key={index} id={item.id} name={item.name} />
        ))}
      </section> */}
      <section className="Content__Card">
        {search.map((item, index) => (
          <Card key={index} id={item.id} name={item.name} />
        ))}
      </section>
      <button onClick={handleLoad}> Load More </button>
    </div>
  );
};

export default Content;
