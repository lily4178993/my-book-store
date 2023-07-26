import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    add: (state, action) => {
      state.books.push(action.payload);
    },
    remove: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export default booksSlice.reducer;
export const { add, remove } = booksSlice.actions;
