import React from "react";

const Card = ({ id, name }) => {
  let imgID = id;
  if (imgID < 10) {
    imgID = "00" + imgID;
  } else if (imgID < 100) {
    imgID = "0" + imgID;
  }

  return (
    <div className="Card__Item">
      <img
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imgID}.png`}
        alt={name}
      />
      <h3>{name}</h3>
    </div>
  );
};

export default Card;
