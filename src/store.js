import { configureStore } from '@reduxjs/toolkit';
import { setupListeners} from '@reduxjs/toolkit/query';

import calcToolReducer from './slices/calcToolSlice';
// import colorToolReducer from './slices/colorToolSlice';
import carToolSlice from './slices/carToolSlice';
import { colorToolApi } from './api/colorToolApi';
import { carToolApi } from './api/carToolApi';

// when you need to call a REST API and add it to the store,
// register the api so that the code that dispatches the action can support async operation
// 1. Add the API object to the reducers
// 2. Set up the listeners for the store's dispatch func
// 3. Wire up the middleware 

export const store = configureStore({
  reducer: {  // add reducer(s) to the store
    calcTool: calcToolReducer,
    [colorToolApi.reducerPath]: colorToolApi.reducer,   // step 1
    [carToolApi.reducerPath]: carToolApi.reducer,   // step 1
    // colorTool: colorToolReducer,
    carTool: carToolSlice,
  },
  middleware: (getDefaultMiddleware) => {   // step 3
    return getDefaultMiddleware().concat(colorToolApi.middleware).concat(carToolApi.middleware);
  },
});

// step 2
setupListeners(store.dispatch);
