import React from 'react';
import BooksCSS from 'components/styles/Books.module.css';
import Form from './form/Form';
import BooksCard from './BooksCard';

const Books = () => (
  <section className={BooksCSS.BookstoreCMS}>

    <BooksCard />
    <hr className={BooksCSS.Line} />
    <Form />
  </section>
);

export default Books;
