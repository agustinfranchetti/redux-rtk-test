import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import widthModifier from "./boxWidth";

export default configureStore({
  reducer: {
    counter: counterReducer,
    boxWidth: widthModifier
  }
});
