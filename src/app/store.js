import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import widthModifier from "../features/boxWidth/boxWidthSlice";
import {pokemonApi} from "../features/pokemon/pokemonApi"

export default configureStore({
  reducer: {
    counter: counterReducer,
    boxWidth: widthModifier,
    [pokemonApi.reducerPath]: pokemonApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware)
});
