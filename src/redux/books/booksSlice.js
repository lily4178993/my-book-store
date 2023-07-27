import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const initialState = {
  books:
  [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
      currentChapter: 'Chapter 17',
      percentageCompletion: '65%',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
      currentChapter: 'Chapter 3: "A Lesson Learned"',
      percentageCompletion: '8%',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
      currentChapter: 'Introduction',
      percentageCompletion: '0%',
    },
  ],
  otherInfos: {
    currentChapter: 'Chapter 1',
    percentageCompletion: '0%',
  },
};

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.item_id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase('book/addBook', (state, action) => {
      state.otherInfos.currentChapter = action.payload.currentChapter;
      state.otherInfos.percentageCompletion = action.payload.percentageCompletion;
    });
  },
});

const selectBooksAttributes = (state) => ({
  books: state.books,
  otherInfos: state.otherInfos,
});

export const booksSelector = createSelector(
  (state) => state.book,
  selectBooksAttributes,
);

export default booksSlice.reducer;
export const { add, remove } = booksSlice.actions;
