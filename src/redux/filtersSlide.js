import { createSlice } from "@reduxjs/toolkit";

export const filtersSlide = createSlice({
  name: "filters",
  initialState: {
    types: [],
    colors: [],
    genders: [],
  },
  reducers: {
    TYPE: (state, action) => {
      state.types = action.payload;
    },
    COLOR: (state, action) => {
      state.colors = action.payload;
    },
    GENDER: (state, action) => {
      state.genders = action.payload;
    },
  },
});

// Action creators
export const { TYPE, COLOR, GENDER } = filtersSlide.actions;

export const selectType = (state) => state.filters.types;
export const selectColor = (state) => state.filters.colors;
export const selectgender = (state) => state.filters.genders;

export default filtersSlide.reducer;
