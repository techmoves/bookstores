import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: 'Working on Progress',
};
const categoriesSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    checkStatus: (state) => ({
      ...state,
      status: 'Working on Progress',
    }),
  },
});

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
