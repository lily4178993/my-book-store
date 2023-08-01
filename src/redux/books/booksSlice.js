import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  books: [],
  error: '',
};

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const apiId = 'hRdt6QvkamlmhTAlLRKZ';

export const fetchBooks = createAsyncThunk('book/fetchBooks', () => axios
  .get(`${baseUrl}${apiId}/books`)
  .then((response) => response.data));

export const addBook = createAsyncThunk('book/addBook', (data) => axios
  .post(`${baseUrl}${apiId}/books`, data)
  .then((response) => response.data));

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.item_id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addBook.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addBook.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(addBook.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(fetchBooks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.loading = false;
      state.books = action.payload;
      state.error = '';
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.loading = false;
      state.books = [];
      state.error = action.error.message;
    });
  },
});

export default booksSlice.reducer;
export const { removeBook } = booksSlice.actions;
