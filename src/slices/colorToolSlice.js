import { createSlice } from '@reduxjs/toolkit';

export const colorToolSlice = createSlice({
  name: 'colorTool',
  initialState: {
    colors: [
      { id:1, name: 'red', hexcode: 'ff0000' },
      { id:2, name: 'green', hexcode: '00ff00' },
      { id:3, name: 'blue', hexcode: '0000ff' },
    ],
  },
  reducers: {
    addColor: (state, action) => {
      // state.colors = [
      //   ...state.colors,
      //   {
      //     name: action.payload.name,
      //     hexcode: action.payload.hexcode,
      //     id: Math.max(...state.colors.map(c => c.id), 0) + 1,
      //   }
      // ]

      // mutate state because Redux Toolkit uses immmer library
      state.colors.push({
        ...action.payload,
        id: Math.max(...state.colors.map(c => c.id), 0) + 1,
      });
    },
    deleteColor: (state, action) => {
      const entryIndex = state.colors.findIndex(color => color.id === action.payload);
      if (entryIndex >= 0) {  // check that the to-be-deleted color exists
        state.colors.splice(entryIndex, 1);
      }
    }
  }
});

export const selectColors = state => state.colorTool.colors;
export const { addColor, deleteColor } = colorToolSlice.actions;
export default colorToolSlice.reducer;