/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Book.css';

const Book = ({ title, author }) => (
  <li className="book">
    <h3 className="book-title">
      {title}
    </h3>
    <h3 className="book-author">{author}</h3>
  </li>
);
Book.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  author: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};
export default Book;
