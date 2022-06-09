import { createSlice } from "@reduxjs/toolkit";

export const dataStore = createSlice({
  name: "data",
  initialState: {
    pokemones: [],
    pokemonesFiltered: [],
  },
  reducers: {
    POKEMON: (state, action) => {
      state.pokemones = action.payload;
    },
    POKEMON_FILTERED: (state, action) => {
      state.pokemonesFiltered = action.payload;
    },
  },
});

// Action creators
export const { POKEMON } = dataStore.actions;
export const { POKEMON_FILTERED } = dataStore.actions;

export const selectPokemon = (state) => state.data.pokemones;
export const selectPokemonFiltered = (state) => state.data.pokemonesFiltered;

export default dataStore.reducer;
