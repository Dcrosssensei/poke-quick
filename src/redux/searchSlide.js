import { createSlice } from "@reduxjs/toolkit";

export const searchSlide = createSlice({
  name: "search",
  initialState: {
    searchText: "",
  },
  reducers: {
    SEARCH: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

// Action creators
export const { SEARCH } = searchSlide.actions;

export const selectSearch = (state) => state.search.searchText;

export default searchSlide.reducer;
