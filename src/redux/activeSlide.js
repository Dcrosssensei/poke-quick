import { createSlice } from "@reduxjs/toolkit";

export const activeSlide = createSlice({
  name: "actives",
  initialState: {
    types: "",
    typesActive: false,
    colors: "",
    colorsActive: false,
    genders: "",
    genderActive: false,
  },
  reducers: {
    TYPES: (state, action) => {
      state.types = action.payload;
    },
    ATYPES: (state, action) => {
      state.typesActive = action.payload;
    },
    COLORS: (state, action) => {
      state.colors = action.payload;
    },
    ACOLORS: (state, action) => {
      state.colorsActive = action.payload;
    },
    GENDERS: (state, action) => {
      state.genders = action.payload;
    },
    AGENDERS: (state, action) => {
      state.genderActive = action.payload;
    },
  },
});

// Action creators
export const { TYPES, COLORS, GENDERS, ATYPES, ACOLORS, AGENDERS } =
  activeSlide.actions;

export const selectTypes = (state) => state.actives.types;
export const selectColors = (state) => state.actives.colors;
export const selectgenders = (state) => state.actives.genders;
export const selectTypesA = (state) => state.actives.typesActive;
export const selectColorsA = (state) => state.actives.colorsActive;
export const selectgendersA = (state) => state.actives.genderActive;

export default activeSlide.reducer;
