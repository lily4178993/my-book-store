import React from 'react';
import Form from './form/Form';
import BooksCard from './BooksCard';
import booksData from './data/booksData';
import BooksCSS from 'components/styles/Books.module.css';

const Books = () => {
    return (
        <section className={BooksCSS.BookstoreCMS}>
            
            <BooksCard booksData={booksData} />
            <hr className={BooksCSS.Line} />
            <Form />
        </section>
    );
};

export default Books;