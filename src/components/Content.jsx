import React from "react";
import Card from "./elements/Card";

//RECUERDE EL STATUS QUE MANEJARA EL CONTENT
import { selectPokemon } from "../redux/dataStore";
import { useSelector } from "react-redux";

const Content = () => {
  const pokeImg = useSelector(selectPokemon);
  const pokemons = pokeImg.slice(0, 20);

  return (
    <div className="Content">
      <p>Choose a pokemon to get more information</p>
      <section className="Content__Card">
        {pokemons.map((item, index) => (
          <Card key={index} id={item.id} name={item.name} />
        ))}
      </section>
    </div>
  );
};

export default Content;
