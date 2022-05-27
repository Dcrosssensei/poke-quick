import React from "react";
import { createPortal } from "react-dom";
import ColorFilter from "./elements/ColorFilter";
import GenderFilter from "./elements/GenderFilter";
import TypeFilter from "./elements/TypeFilter";

const ModalMenu = ({ onClose }) => {
  return (
    <div className="ModalMenu">
      <div className="ModalMenu__Filter">
        <button onClick={onClose}></button>
        <TypeFilter></TypeFilter>
        <ColorFilter></ColorFilter>
        <GenderFilter></GenderFilter>
      </div>
    </div>
  );
};

export default function ModalMenuP({ onClose }) {
  return createPortal(
    <ModalMenu onClose={onClose} />,

    document.getElementById("modalPortal")
  );
}
