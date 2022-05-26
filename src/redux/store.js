import { configureStore } from "@reduxjs/toolkit";
//stores
import dataStore from "./dataStore";

export default configureStore({
  reducer: {
    data: dataStore,
  },
});
