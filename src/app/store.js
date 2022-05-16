import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import widthModifier from "../features/boxWidth/boxWidth";

export default configureStore({
  reducer: {
    counter: counterReducer,
    boxWidth: widthModifier
  }
});
