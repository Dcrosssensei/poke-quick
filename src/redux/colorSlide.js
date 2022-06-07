import { createSlice } from "@reduxjs/toolkit";

export const colorSlide = createSlice({
  name: "gemderFilter",
  initialState: {
    black: [],
    blue: [],
    brown: [],
    gray: [],
    green: [],
    pink: [],
    purple: [],
    red: [],
    white: [],
    yellow: [],
  },
  reducers: {
    black: (state, action) => {
      state.black = action.payload;
    },
    blue: (state, action) => {
      state.blue = action.payload;
    },
    brown: (state, action) => {
      state.brown = action.payload;
    },
    gray: (state, action) => {
      state.gray = action.payload;
    },
    green: (state, action) => {
      state.green = action.payload;
    },
    pink: (state, action) => {
      state.pink = action.payload;
    },
    purple: (state, action) => {
      state.purple = action.payload;
    },
    red: (state, action) => {
      state.red = action.payload;
    },
    white: (state, action) => {
      state.white = action.payload;
    },
    yellow: (state, action) => {
      state.yellow = action.payload;
    },
  },
});

// Action creators
export const {
  black,
  blue,
  brown,
  gray,
  green,
  pink,
  purple,
  red,
  white,
  yellow,
} = colorSlide.actions;

export const selectBlack = (state) => state.colorFilter.black;
export const selectblue = (state) => state.colorFilter.blue;
export const selectbrown = (state) => state.colorFilter.brown;
export const selectgray = (state) => state.colorFilter.gray;
export const selectgreen = (state) => state.colorFilter.green;
export const selectpink = (state) => state.colorFilter.pink;
export const selectpurple = (state) => state.colorFilter.purple;
export const selectred = (state) => state.colorFilter.red;
export const selectwhite = (state) => state.colorFilter.white;
export const selectyellow = (state) => state.colorFilter.yellow;
export const selectAllColor = (state) => state.colorFilter;

export default colorSlide.reducer;
