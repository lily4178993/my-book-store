import React from 'react';
import BooksCSS from 'components/styles/Books.module.css';
import Form from './form/Form';
import BooksCard from './BooksCard';
import booksData from './data/booksData';

const Books = () => (
  <section className={BooksCSS.BookstoreCMS}>

    <BooksCard booksData={booksData} />
    <hr className={BooksCSS.Line} />
    <Form />
  </section>
);

export default Books;
