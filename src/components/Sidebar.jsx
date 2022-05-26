import React from "react";

import GenderFilter from "./elements/GenderFilter";
import TypeFilter from "./elements/TypeFilter";
import ColorFilter from "./elements/ColorFilter";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <h4>filter</h4>
      <hr />
      <div className="Sidebar__Filter">
        <TypeFilter />
        <hr />
        <ColorFilter />
        <hr />
        <GenderFilter />
      </div>
    </div>
  );
};

export default Sidebar;
