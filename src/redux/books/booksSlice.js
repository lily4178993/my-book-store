import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const initialState = {
  books:
  [
    {
      item_id: uuid(),
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: uuid(),
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: uuid(),
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        item_id: uuid(),
        title: action.payload.title,
        author: action.payload.author,
        category: action.payload.category,
      };
      state.books.push(newBook);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.item_id !== action.payload);
    },
  },
});

export default booksSlice.reducer;
export const { addBook, removeBook } = booksSlice.actions;
