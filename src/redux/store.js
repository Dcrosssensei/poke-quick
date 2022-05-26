import { configureStore } from "@reduxjs/toolkit";
//stores
import dataStore from "./dataStore";
import filtersSlide from "./filtersSlide";

export default configureStore({
  reducer: {
    data: dataStore,
    filters: filtersSlide,
  },
});
