import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => (
  <header className="header">
    <h1 className="header-title">Bookstore</h1>
    <nav className="nav-bar">
      <ul className="nav-var-list">
        <li>
          <Link className="link" to="/">Books</Link>
        </li>
        <li>
          <Link className="link" to="/Categories">Categories</Link>
        </li>

      </ul>
    </nav>
  </header>
);

export default Header;
