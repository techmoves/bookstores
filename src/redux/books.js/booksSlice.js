import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// id = lnON7eheedKQ7jfvZ7Dy;

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/knByXsRqGCzYvknw4Ujlg/books/';

const initialState = {
  bookItem: [],
  isLoading: false,
  statusMessage: '',
};

export const fetchBooks = createAsyncThunk(
  'book/fetchBooks',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(url);
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
      const response = await axios.post(url, data);
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
      .addCase(fetchBooks.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        bookItem: action.payload,
      }))
      .addCase(fetchBooks.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        statusMessage: action.payload,
      }));
    // Handle the state for adding new book to the API
    builder
      .addCase(addBook.fulfilled, (state, action) => ({
        ...state,
        statusMessage: action.payload,
      }))
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
