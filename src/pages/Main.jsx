import React, { useState } from "react";
import Content from "../components/Content";
import Header from "../components/Header";

import ModalMenuP from "../components/ModalMenu";
import Sidebar from "../components/Sidebar";

export const Main = () => {
  const [showModalMenu, setShowModalMenu] = useState(false);

  const handleClick = () => {
    setShowModalMenu(true);
  };

  const handleClose = () => {
    setShowModalMenu(false);
  };

  return (
    <>
      <div className="Main">
        <Header />
        <Sidebar />
        <Content />
      </div>
      <div className="MobileMenu" onClick={handleClick}>
        take me to the modal menu
        {showModalMenu && <ModalMenuP onClose={handleClose}></ModalMenuP>}
      </div>
    </>
  );
};
