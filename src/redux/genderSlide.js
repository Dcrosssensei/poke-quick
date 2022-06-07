import { createSlice } from "@reduxjs/toolkit";

export const genderSlide = createSlice({
  name: "gemderFilter",
  initialState: {
    all: [],
    female: [],
    male: [],
    genderless: [],
    undefineds: [],
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
      state.undefineds = action.payload;
    },
  },
});

// Action creators
export const { all, female, male, genderless, undefineds } =
  genderSlide.actions;

export const selectFemale = (state) => state.genderFilter.female;
export const selectMale = (state) => state.genderFilter.male;
export const selectGeness = (state) => state.genderFilter.genderless;
export const selectAllGender = (state) => state.genderFilter;

export default genderSlide.reducer;
