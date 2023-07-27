import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books:
  [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
      CurrentChapter: 'Chapter 17',
      percentageCompletion: '65%',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
      CurrentChapter: 'Chapter 3: "A Lesson Learned"',
      percentageCompletion: '8%',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
      CurrentChapter: 'Introduction',
      percentageCompletion: '0%',
    },
  ],
};

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export default booksSlice.reducer;
export const { add, remove } = booksSlice.actions;
