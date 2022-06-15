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

  const handleClose = (e) => {
    setShowModalMenu(!showModalMenu);
    e.stopPropagation();
  };

  return (
    <>
      <div className="Main">
        <Header />
        <Sidebar />
        <Content />
      </div>
      <button className="MobileMenu" onClick={handleClick}>
        »
        {showModalMenu && (
          <ModalMenuP onClose={(e) => handleClose(e)}></ModalMenuP>
        )}
      </button>
    </>
  );
};
