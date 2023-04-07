import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import '../styles/bookList.scss';
import Form from './Form';
import { getBooks } from '../redux/books/booksSlice';

const BooksList = () => {
  const {
    booksItems, isLoading, error,
  } = useSelector((store) => store.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error !== undefined) {
    return (
      <div>
        <h1>Error...</h1>
        <p>{error}</p>
      </div>
    );
  }

  const books = Object.keys(booksItems).map((key) => (
    booksItems[key].map((book) => (
      <Book key={key} title={book.title} author={book.author} id={key} category={book.category} />
    ))
  ));

  return (
    <div className="book-container">
      <ul className="book-list">
        { books }

      </ul>
      <div className="horizontal-divider" />
      <Form />
    </div>
  );
};

export default BooksList;
