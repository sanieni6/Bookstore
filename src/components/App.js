import React from 'react';
import {
  Routes, Route,
} from 'react-router-dom';
import '../styles/App.css';
import Header from './Header';
import BooksList from './BooksList';
import Categories from './Categories';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<BooksList />} />
          <Route path="/Categories" element={<Categories />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
