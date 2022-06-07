import { createSlice } from "@reduxjs/toolkit";

export const typeSlide = createSlice({
  name: "typeFilter",
  initialState: {
    normal: [],
    fighting: [],
    flying: [],
    poison: [],
    ground: [],
    rock: [],
    bug: [],
    ghost: [],
    steel: [],
    fire: [],
    water: [],
    grass: [],
    electric: [],
    psychic: [],
    ice: [],
    dragon: [],
    dark: [],
    fairy: [],
    unknown: [],
    shadow: [],
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
export const selectfighting = (state) => state.typeFilter.fighting;
export const selectflying = (state) => state.typeFilter.flying;
export const selectpoison = (state) => state.typeFilter.poison;
export const selectground = (state) => state.typeFilter.ground;
export const selectrock = (state) => state.typeFilter.rock;
export const selectbug = (state) => state.typeFilter.bug;
export const selectghost = (state) => state.typeFilter.ghost;
export const selectsteel = (state) => state.typeFilter.steel;
export const selectfire = (state) => state.typeFilter.fire;
export const selectwater = (state) => state.typeFilter.water;
export const selectgrass = (state) => state.typeFilter.grass;
export const selectelectric = (state) => state.typeFilter.electric;
export const selectpsychic = (state) => state.typeFilter.psychic;
export const selectice = (state) => state.typeFilter.ice;
export const selectdragon = (state) => state.typeFilter.dragon;
export const selectdark = (state) => state.typeFilter.dark;
export const selectfairy = (state) => state.typeFilter.fairy;
export const selectunknown = (state) => state.typeFilter.unknown;
export const selectshadow = (state) => state.typeFilter.shadow;
export const selectall = (state) => state.typeFilter;

export default typeSlide.reducer;
