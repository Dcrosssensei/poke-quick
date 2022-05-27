import React from "react";
import { useDispatch } from "react-redux";
import { SEARCH } from "../redux/searchSlide";
import logo from "../assets/logo.png";
const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="Header">
      <img src={logo} alt="logo" />
      <label>
        Search a pokemon by name or number:
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => {
            dispatch(SEARCH(e.target.value));
          }}
        />
      </label>
    </div>
  );
};

export default Header;
