import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  books: [],
  error: '',
};

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/hRdt6QvkamlmhTAlLRKZ/books';

export const fetchBooks = createAsyncThunk('book/fetchBooks', () => axios
  .get(url)
  .then((response) => response.data));

export const addBook = createAsyncThunk('book/addBook', (data) => axios
  .post(url, data)
  .then((response) => response.data));

export const removeBook = createAsyncThunk('book/removeBook', (dataId) => axios
  .delete(`${url}/${dataId}`, dataId)
  .then(() => dataId));

const booksSlice = createSlice({
  name: 'book',
  initialState,
  /* reducers: {
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.item_id !== action.payload);
    },
  }, */
  extraReducers: (builder) => {
    builder.addCase(addBook.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addBook.fulfilled, (state, action) => {
      state.loading = false;
      state.books[action.payload.item_id] = action.payload;
      state.error = '';
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
    builder.addCase(removeBook.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(removeBook.fulfilled, (state, action) => {
      state.loading = false;
      state.books = action.payload;
      state.error = '';
    });
    builder.addCase(removeBook.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default booksSlice.reducer;
