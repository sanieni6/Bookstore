import React from 'react';
import Book from './Book';
import '../styles/bookList.css';
import Form from './Form';

const BooksList = () => {
  const books = [{
    key: 1,
    title: 'Dune',
    author: 'Frank Herbert',
  },
  {
    key: 2,
    title: 'Anihilation',
    author: 'Jeff VanderMeer',
  },
  {
    key: 3,
    title: 'Juventud en Extasis',
    author: 'Jorge Bucay',
  }];
  return (
    <div>
      <ul className="book-list">
        {books.map((book) => (
          <Book key={book.key} title={book.title} author={book.author} />

        ))}

      </ul>
      <Form />
    </div>
  );
};

export default BooksList;
