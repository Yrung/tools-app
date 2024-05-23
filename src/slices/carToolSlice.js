import { createSlice } from '@reduxjs/toolkit';

export const carToolSlice = createSlice({
  name: 'carTool',
  initialState: {
    cars: [
      {id:1, make: 'make1', model: 'model1', year: 2024, color: 'red', price: 50000},
      {id:2, make: 'make2', model: 'model2', year: 2024, color: 'blue', price: 50000},
    ],
  },
  reducers: {
    addCar: (state, action) => {
      // mutate state because Redux Toolkit uses immmer library
      state.cars.push({
        ...action.payload,
        id: Math.max(...state.cars.map(c => c.id), 0) + 1,
      });
    },
    deleteCar: (state, action) => {
      const entryIndex = state.cars.findIndex(car => car.id === action.payload);
      if (entryIndex >= 0) {  // check that the to-be-deleted color exists
        state.cars.splice(entryIndex, 1);
      }
    }
  }
});

export const selectCars = state => state.carTool.cars;
export const { addCar, deleteCar } = carToolSlice.actions;
export default carToolSlice.reducer;