import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import counterReducer from "../features/counter/counterSlice";
import widthModifier from "../features/boxWidth/boxWidthSlice";
import {pokemonApi} from "../features/pokemon/pokemonApi"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    boxWidth: widthModifier,
    [pokemonApi.reducerPath]: pokemonApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware)
});

setupListeners(store.dispatch)