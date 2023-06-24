import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <div>
      <nav>
        <h1>BookstoreCMS</h1>
        <ul className="nav-link">
          <li className="link-home">
            <Link className="link" to="/">
              BOOKS
            </Link>
          </li>
          <li className="link-category">
            <Link className="link" to="/categories">
              CATEGORIES
            </Link>
          </li>
        </ul>
        <button type="button" className="login-btn">
          <FontAwesomeIcon icon={faUser} />
        </button>
      </nav>
    </div>
  );
}
export default Navbar;
