import React, { useState } from "react";
import ModalP from "../../pages/Modal";

const Card = ({ id, name }) => {
  let imgID = id;
  if (imgID < 10) {
    imgID = "00" + imgID;
  } else if (imgID < 100) {
    imgID = "0" + imgID;
  }

  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="Card__Item" onClick={() => handleClick()}>
        <img
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imgID}.png`}
          alt={name}
        />
        <h3>{name}</h3>
      </div>
      {showModal && (
        <ModalP Close={handleClose} id={id} imgid={imgID} name={name}></ModalP>
      )}
    </>
  );
};

export default Card;
