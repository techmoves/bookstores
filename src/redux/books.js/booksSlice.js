import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/knByXsRqGCzYvknw4Ujlg/books/';
const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const initialState = {
  bookItem: [],
  isLoading: false,
  statusMessage: '',
};
export const fetchBooks = createAsyncThunk(
  'book/fetchBooks',
  async (thunkAPI) => {
    try {
      const appId = 'zslYwuuyhP8TzLCo4TJj';
      const response = await axios.get(`${baseUrl}/apps/${appId}/books/`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
export const addBook = createAsyncThunk(
  'book/addBook',
  async (data, thunkAPI) => {
    try {
      const appId = 'zslYwuuyhP8TzLCo4TJj';
      const response = await axios.post(`${baseUrl}/apps/${appId}/books`, data);
      thunkAPI.dispatch(fetchBooks());
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
export const removeBook = createAsyncThunk(
  'book/removeBook',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`${url}${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle the state for getting/fetching book from API
    builder
      .addCase(fetchBooks.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchBooks.fulfilled, (state, action) => {
        const bookObject = Object.keys(action.payload);
        state.bookItem = [];
        bookObject.forEach((value) => {
          state.bookItem.push(action.payload[value][0]);
        });
        state.isLoading = false;
      })
      .addCase(fetchBooks.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        statusMessage: action.payload,
      }));
    // Handle the state for adding new book to the API
    builder
      .addCase(addBook.fulfilled, (state, action) => {
        state.bookItem.push(action.payload);
      })
      .addCase(addBook.rejected, (state, action) => ({
        ...state,
        statusMessage: action.payload,
      }));
    // Handle the state for deleting a  book from the API
    builder
      .addCase(removeBook.fulfilled, (state, action) => ({
        ...state,
        statusMessage: action.payload,
      }))
      .addCase(removeBook.rejected, (state, action) => ({
        ...state,
        statusMessage: action.payload,
      }));
  },
});
export default booksSlice.reducer;
