import { createSlice } from '@reduxjs/toolkit';

export const calcToolSlice = createSlice({
  name: 'calcTool',
  initialState: {
    history: [],
  },
  reducers: {
    add: (state, action) => {
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

// calculate 'result' from history
export const selectResult = state => {
  let result = 0;
  for (const entry of state.calcTool.history) {
    switch (entry.opName) {
      case 'Add':
        result += entry.opValue;
        break;
      case 'Subtract':
        result -= entry.opValue;
        break;
      case 'Multiply':
        result *= entry.opValue;
        break;
      case 'Divide':
        result /= entry.opValue;
        break;
      default:
        break;
    }
  }
  return result;
}

// get the 'history' part of the state from the 'calcTool' slice
export const selectHistory = state => state.calcTool.history;

// export the reducer, so you could add them to the store when configuring the store in store.js
export default calcToolSlice.reducer;