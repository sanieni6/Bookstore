import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook, getBooks } from '../redux/books/booksSlice';
import '../styles/form.scss';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
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
    }
  };
  return (
    <div className="form-container">
      <h2 className="form-name">ADD NEW BOOK</h2>
      <form className="forma" onSubmit={handleSubmit}>
        <input
          className="input-text"
          type="text"
          placeholder="Book title"
          value={title}
          onChange={handleChangeTitle}
          required
        />
        <input
          className="input-text"
          type="text"
          placeholder="Author"
          value={author}
          onChange={handleChangeAuthor}
          required
        />
        <button type="submit" className="input-submit">ADD BOOK</button>
      </form>

    </div>

  );
};

export default Form;
