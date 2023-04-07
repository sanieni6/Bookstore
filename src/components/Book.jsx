import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Book.scss';
import { useDispatch } from 'react-redux';
import { removeBook, getBooks } from '../redux/books/booksSlice';

const Book = ({
  title, author, id, category,
}) => {
  const dispatch = useDispatch();
  return (
    <li className="book">
      <div className="book-main">
        <div className="book-data">
          <p className="book-category">{category}</p>
          <h2 className="book-title">{title}</h2>
          <p className="book-author">{author}</p>
        </div>
        <ul className="book-actions">
          <li className="li-buttons">
            <button type="button" className="btn">Comments</button>
          </li>
          <li className="li-buttons">
            <button
              type="button"
              className="btn borders"
              onClick={() => dispatch(removeBook(id)).then(() => {
                dispatch(getBooks());
              })}
            >
              Remove
            </button>
          </li>
          <li className="li-buttons">
            <button type="button" className="btn">Edit</button>
          </li>

        </ul>

      </div>
      <div className="progress-circle">
        <div className="oval">
          <div className="circular-progress" />
        </div>
        <div className="progress">
          <p className="average">64%</p>
          <p className="state">Completed</p>
        </div>

      </div>
      <div className="progress-divider" />
      <div className="chapter">
        <div className="chapter-info">
          <p className="current-chapter">CURRENT CHAPTER</p>
          <p className="nchapter">Chapter 12</p>
        </div>
        <button type="button" className="update">UPDATE PROGRESS</button>
      </div>

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
  category: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};
export default Book;
