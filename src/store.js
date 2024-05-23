import { configureStore } from '@reduxjs/toolkit';

import calcToolReducer from './slices/calcToolSlice';
import colorToolReducer from './slices/colorToolSlice';
import carToolSlice from './slices/carToolSlice';

export const store = configureStore({
  reducer: {  // add reducer to the store
    calcTool: calcToolReducer,
    colorTool: colorToolReducer,
    carTool: carToolSlice,
  }
});