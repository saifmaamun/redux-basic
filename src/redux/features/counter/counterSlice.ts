import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  count: number;
}
const initialState: CounterState = {
  count: 5,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    payloadIncrement: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement, payloadIncrement } = counterSlice.actions;

export default counterSlice.reducer;
