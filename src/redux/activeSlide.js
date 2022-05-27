import { createSlice } from "@reduxjs/toolkit";

export const activeSlide = createSlice({
  name: "actives",
  initialState: {
    types: "",
    colors: "",
    genders: "",
  },
  reducers: {
    TYPES: (state, action) => {
      state.types = action.payload;
    },
    COLORS: (state, action) => {
      state.colors = action.payload;
    },
    GENDERS: (state, action) => {
      state.genders = action.payload;
    },
  },
});

// Action creators
export const { TYPES, COLORS, GENDERS } = activeSlide.actions;

export const selectTypes = (state) => state.actives.types;
export const selectColors = (state) => state.actives.colors;
export const selectgenders = (state) => state.actives.genders;

export default activeSlide.reducer;
