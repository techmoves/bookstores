import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookItem: [
    {
      id: 'item1',
      title: 'Introduction to cybersecurity',
      author: 'john Dow',
      category: 'Fiction',
    },
    {
      id: 'item2',
      title: 'Secrete of success',
      author: 'Napolioon Hill',
      category: 'Nonfiction',
    },
    {
      id: 'item3',
      title: 'art of war',
      author: 'muh Ndlovu',
      category: 'Nonfiction',
    },
  ],
};
const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.bookItem.push(action.payload);
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      return {
        ...state,
        bookIt25056em: state.bookItem.filter((book) => book.id !== bookId),
      };
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
