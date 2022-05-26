import { createSlice } from "@reduxjs/toolkit";

export const dataStore = createSlice({
  name: "data",
  initialState: {
    pokemones: [],
  },
  reducers: {
    POKEMON: (state, action) => {
      state.pokemones = action.payload;
    },
  },
});

// Action creators
export const { POKEMON } = dataStore.actions;

export const selectPokemon = (state) => state.data.pokemones;

export default dataStore.reducer;
