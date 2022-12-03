import { createSlice } from "@reduxjs/toolkit";

export interface StepState {
  step: number;
}

const initialState: StepState = {
  step: 0,
};

export const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    incrementStep: (state) => {
      state.step += 1;
    },
    decrementStep: (state) => {
      state.step -= 1;
    },
  },
});

export const { incrementStep, decrementStep } = registrationSlice.actions;

export default registrationSlice.reducer;
