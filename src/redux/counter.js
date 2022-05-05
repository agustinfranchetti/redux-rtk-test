import { createSlice } from "@reduxjs/toolkit";

export const counterReducer = createSlice({
  name: "counter",
  initialState: {
    count: 0
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
    decrementByAmount: (state, action) => {
        state.count -= action.payload;
      }
  }
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount
} = counterReducer.actions;

export default counterReducer.reducer;
