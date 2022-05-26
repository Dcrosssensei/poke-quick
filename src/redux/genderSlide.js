import { createSlice } from "@reduxjs/toolkit";

export const genderSlide = createSlice({
  name: "gemderFilter",
  initialState: {
    all: false,
    female: false,
    male: false,
    genderless: false,
    undefineds: false,
  },
  reducers: {
    all: (state, action) => {
      state.all = action.payload;
    },
    female: (state, action) => {
      state.female = action.payload;
    },
    male: (state, action) => {
      state.male = action.payload;
    },
    genderless: (state, action) => {
      state.genderless = action.payload;
    },
    undefineds: (state, action) => {
      state.undefined = action.payload;
    },
  },
});

// Action creators
export const { all, female, male, genderless, undefineds } =
  genderSlide.actions;

export const selectAll = (state) => state.genderFilter.all;

export default genderSlide.reducer;
