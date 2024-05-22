import { createSlice } from '@reduxjs/toolkit';

export const calcToolSlice = createSlice({
  name: 'calcTool',
  initialState: {
    result: 0,
    history: [],
  },
  reducers: {
    add: (state, action) => {
      state.result += action.payload;
      state.history = [
        ...state.history,
        {
          opName: 'Add',
          opValue: action.payload,
          id: Math.max(...state.history.map(h => h.id), 0) + 1,
        }
      ]
    },
    subtract: (state, action) => {
      state.result -= action.payload;
      state.history = [
        ...state.history,
        {
          opName: 'Subtract',
          opValue: action.payload,
          id: Math.max(...state.history.map(h => h.id), 0) + 1,
        }
      ]
    },
    multiply: (state, action) => {
      state.result *= action.payload;
      state.history = [
        ...state.history,
        {
          opName: 'Multiply',
          opValue: action.payload,
          id: Math.max(...state.history.map(h => h.id), 0) + 1,
        }
      ]
    },
    divide: (state, action) => {
      state.result /= action.payload;
      state.history = [
        ...state.history,
        {
          opName: 'Divide',
          opValue: action.payload,
          id: Math.max(...state.history.map(h => h.id), 0) + 1,
        }
      ]
    },
    clearHistory: (state) => {
      state.result = 0;
      // state.history = [];

      // Redux Toolkit prefers that we mutate the array instead of create a new one
      state.history.splice(0, state.history.length);
    },
    deleteHistoryEntry: (state, action) => {
      // state.history = state.history.filter(h => h.id !== action.payload);

      // Redux Toolkit prefers that we mutate the array instead of create a new one
      const entryIndex = state.history.findIndex(entry => entry.id === action.payload);
      state.history.splice(entryIndex, 1);
    }
  }
});

// this creates add() and subtract() actions
// these actions will be used/dispatched when you want to "call" the reducers
export const { add, subtract, multiply, divide, clearHistory, deleteHistoryEntry } = calcToolSlice.actions;

// get the 'result' part of the state from the 'calcTool' slice
export const selectResult = state => state.calcTool.result;

export const selectHistory = state => state.calcTool.history;

// export the reducer, so you could add them to the store when configuring the store in store.js
export default calcToolSlice.reducer;