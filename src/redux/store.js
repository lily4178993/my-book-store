import { configureStore } from '@reduxjs/toolkit';
import bookReducer from 'redux/books/booksSlice';
import categoryReducer from 'redux/categories/categoriesSlice';

const store = configureStore({
  reducer: {
    book: bookReducer,
    category: categoryReducer,
  },
});

export default store;
