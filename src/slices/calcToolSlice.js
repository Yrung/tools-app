import { createSlice } from '@reduxjs/toolkit';

export const calcToolSlice = createSlice({
  name: 'calcTool',
  initialState: {
    result: 0,
  },
  reducers: {
    add: (state, action) => {
      state.result += action.payload;
    },
    subtract: (state, action) => {
      state.result -= action.payload;
    },
    multiply: (state, action) => {
      state.result *= action.payload;
    },
    divide: (state, action) => {
      state.result /= action.payload;
    }
  }
});

// this creates add() and subtract() actions
// these actions will be used/dispatched when you want to "call" the reducers
export const { add, subtract, multiply, divide } = calcToolSlice.actions;

// get the 'result' part of the state from the 'calcTool' slice
export const selectResult = state => state.calcTool.result;

// export the reducer, so you could add them to the store when configuring the store in store.js
export default calcToolSlice.reducer;