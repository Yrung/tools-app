import { configureStore } from '@reduxjs/toolkit';

import calcToolReducer from './slices/calcToolSlice';
import colorToolReducer from './slices/colorToolSlice';

export const store = configureStore({
  reducer: {  // add reducer to the store
    calcTool: calcToolReducer,
    colorTool: colorToolReducer,
  }
});