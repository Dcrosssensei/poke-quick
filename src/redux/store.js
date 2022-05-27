import { configureStore } from "@reduxjs/toolkit";
//stores
import dataStore from "./dataStore";
import filtersSlide from "./filtersSlide";
import searchSlide from "./searchSlide";
import typeSlide from "./typeSlide";
import colorSlide from "./colorSlide";
import genderSlide from "./genderSlide";
import activeSlide from "./activeSlide";

export default configureStore({
  reducer: {
    data: dataStore,
    filters: filtersSlide,
    search: searchSlide,
    typeFilter: typeSlide,
    colorFilter: colorSlide,
    genderFilter: genderSlide,
    actives: activeSlide,
  },
});
