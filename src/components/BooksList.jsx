/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Book from './Book';
import '../styles/bookList.css';

const BooksList = () => {
  const [books, setBook] = useState([{
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
  }]);
  return (
    <div>
      <ul className="book-list">
        {books.map((book) => (
          <Book key={book.key} title={book.title} author={book.author} />

        ))}

      </ul>
      <form className="form-container">
        <input
          className="input-text"
          type="text"
          placeholder="Book title..."
        />
        <input
          className="input-text"
          type="text"
          placeholder="Author..."
        />
        <button type="submit" className="input-submit">Add Book</button>
      </form>
    </div>
  );
};

export default BooksList;
