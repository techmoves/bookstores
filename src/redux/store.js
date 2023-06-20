import { configureStore } from '@reduxjs/toolkit';
import booksSlice from './books.js/booksSlice';
import categoriesSlice from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    book: booksSlice,
    category: categoriesSlice,
  },
});

export default store;
