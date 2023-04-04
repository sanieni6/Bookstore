import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import '../styles/bookList.css';
import Form from './Form';

const BooksList = () => {
  const { booksItems } = useSelector((store) => store.books);
  return (
    <div>
      <ul className="book-list">
        {booksItems.map((book) => (
          <Book key={book.item_id} title={book.title} author={book.author} id={book.item_id} />

        ))}

      </ul>
      <Form />
    </div>
  );
};

export default BooksList;
