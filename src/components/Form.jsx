import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook, getBooks } from '../redux/books/booksSlice';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeAuthor = (e) => {
    setAuthor(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && author.trim()) {
      const book = {
        item_id: uuidv4(),
        title,
        author,
        category: 'Fiction',
      };
      dispatch(addBook(book)).then(() => {
        dispatch(getBooks());
      });
      setTitle('');
      setAuthor('');
      setMessage('');
    } else {
      setMessage('Please add a book');
    }
  };
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        className="input-text"
        type="text"
        placeholder="Book title..."
        value={title}
        onChange={handleChangeTitle}
      />
      <input
        className="input-text"
        type="text"
        placeholder="Author..."
        value={author}
        onChange={handleChangeAuthor}
      />
      <button type="submit" className="input-submit">Add Book</button>
      <span className="submit-warning">{message}</span>
    </form>
  );
};

export default Form;
