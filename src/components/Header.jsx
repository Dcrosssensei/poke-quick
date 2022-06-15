import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SEARCH, selectSearch } from "../redux/searchSlide";
import logo from "../assets/logo.png";

import { selectPokemon, POKEMON_FILTERED } from "../redux/dataStore";

const Header = () => {
  const dispatch = useDispatch();
  const pokemonAll = useSelector(selectPokemon);
  const valueSearch = useSelector(selectSearch);

  const handleClick = () => {
    dispatch(POKEMON_FILTERED(pokemonAll));
    dispatch(SEARCH(""));
  };

  return (
    <div className="Header">
      <img src={logo} alt="logo" />
      <div className="Header__inputs">
        <label>
          Search a pokemon by name or number:
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => {
              dispatch(SEARCH(e.target.value));
            }}
            value={valueSearch}
          />
        </label>
        <button onClick={handleClick} className="">
          NEW SEARCH
        </button>
      </div>
    </div>
  );
};

export default Header;
