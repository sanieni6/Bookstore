import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Book.css';
import { useDispatch } from 'react-redux';
import { removeBook, getBooks } from '../redux/books/booksSlice';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();
  return (
    <li className="book">
      <h3 className="book-title">
        {title}
      </h3>
      <h3 className="book-author">{author}</h3>
      <button
        type="button"
        className="input-submit"
        onClick={() => dispatch(removeBook(id)).then(() => {
          dispatch(getBooks());
        })}
      >
        Delete
      </button>
    </li>
  );
};

Book.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  author: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};
export default Book;
