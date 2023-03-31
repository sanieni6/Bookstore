import React from 'react';

const Form = () => (
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
);
export default Form;
