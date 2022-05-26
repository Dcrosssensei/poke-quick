import React from "react";
import { useDispatch } from "react-redux";
import { SEARCH } from "../redux/searchSlide";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="Header">
      <img src="../" alt="logo" />
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => {
          dispatch(SEARCH(e.target.value));
        }}
      />
    </div>
  );
};

export default Header;
