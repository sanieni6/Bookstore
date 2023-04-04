import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoriesItems: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => {
      const newState = { ...state };
      newState.categoriesItems = 'Under Construction';
      return newState;
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
