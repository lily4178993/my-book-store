import React from 'react';
import Form from './form/Form';
import BooksCard from './BooksCard';
import booksData from './data/booksData';

const Books = () => {
    return (
        <section>
            
            <BooksCard booksData={booksData} />
            <Form />
        </section>
    );
};

export default Books;