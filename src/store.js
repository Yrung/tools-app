import { configureStore } from '@reduxjs/toolkit';

import calcToolReducer from './slices/calcToolSlice';

export const store = configureStore({
  reducer: {  // add reducer to the store
    calcTool: calcToolReducer,
  }
});