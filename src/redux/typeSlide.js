import { createSlice } from "@reduxjs/toolkit";

export const typeSlide = createSlice({
  name: "gemderFilter",
  initialState: {
    normal: false,
    fighting: false,
    flying: false,
    poison: false,
    ground: false,
    rock: false,
    bug: false,
    ghost: false,
    steel: false,
    fire: false,
    water: false,
    grass: false,
    electric: false,
    psychic: false,
    ice: false,
    dragon: false,
    dark: false,
    fairy: false,
    unknown: false,
    shadow: false,
  },
  reducers: {
    normal: (state, action) => {
      state.normal = action.payload;
    },
    fighting: (state, action) => {
      state.fighting = action.payload;
    },
    flying: (state, action) => {
      state.flying = action.payload;
    },
    poison: (state, action) => {
      state.poison = action.payload;
    },
    ground: (state, action) => {
      state.ground = action.payload;
    },
    rock: (state, action) => {
      state.rock = action.payload;
    },
    bug: (state, action) => {
      state.bug = action.payload;
    },
    ghost: (state, action) => {
      state.ghost = action.payload;
    },
    steel: (state, action) => {
      state.steel = action.payload;
    },
    fire: (state, action) => {
      state.fire = action.payload;
    },
    water: (state, action) => {
      state.water = action.payload;
    },
    grass: (state, action) => {
      state.grass = action.payload;
    },
    electric: (state, action) => {
      state.electric = action.payload;
    },
    psychic: (state, action) => {
      state.psychic = action.payload;
    },
    ice: (state, action) => {
      state.ice = action.payload;
    },
    dragon: (state, action) => {
      state.dragon = action.payload;
    },
    dark: (state, action) => {
      state.dark = action.payload;
    },
    fairy: (state, action) => {
      state.fairy = action.payload;
    },
    unknown: (state, action) => {
      state.unknown = action.payload;
    },
    shadow: (state, action) => {
      state.ghost = action.payload;
    },
  },
});

// Action creators
export const {
  normal,
  fighting,
  flying,
  poison,
  ground,
  rock,
  bug,
  ghost,
  steel,
  fire,
  water,
  grass,
  electric,
  psychic,
  ice,
  dragon,
  dark,
  fairy,
  unknown,
  shadow,
} = typeSlide.actions;

export const selectNormal = (state) => state.typeFilter.normal;

export default typeSlide.reducer;
