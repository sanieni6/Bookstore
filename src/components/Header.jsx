import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';

const Header = () => (
  <header className="header">
    <div className="main-header">
      <h1 className="header-title">Bookstore CMS</h1>
      <nav className="nav-bar">
        <ul className="nav-var-list">
          <li>
            <Link className="link" to="/">BOOKS</Link>
          </li>
          <li>
            <Link className="link" to="/Categories">CATEGORIES</Link>
          </li>

        </ul>
      </nav>
    </div>
    <div className="user">
      <span className="material-symbols-outlined">person</span>

    </div>
  </header>
);

export default Header;
