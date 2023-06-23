import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Navbar() {
  return (
    <div>
      <nav>
        <h1 className="topic">BookstoreCRM</h1>
        <ul className="nav-link">
          <li className="link-home">
            <Link className="link" to="/">
              Books
            </Link>
          </li>
          <li className="link-category">
            <Link className="link" to="/categories">
              Categories
            </Link>
          </li>
        </ul>
        <div className="prof-icon" />
      </nav>
    </div>
  );
}
export default Navbar;
