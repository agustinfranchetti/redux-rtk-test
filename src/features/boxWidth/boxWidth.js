import { createSlice } from "@reduxjs/toolkit";

export const widthModifier = createSlice({
  name: "boxWidth",
  initialState: {
    width: 10
  },
  reducers: {
    widthIncrease: (state) => {
      state.width += 10;
    },
    widthDecrease: (state) => {
      state.width -= 10;
    }
  }
});

// Action creators are generated for each case reducer function
export const {
  widthIncrease,
  widthDecrease,
} = widthModifier.actions;

export default widthModifier.reducer;