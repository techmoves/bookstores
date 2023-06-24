import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <div>
      <nav>
        <h1 className="topic">BookstoreCMS</h1>
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
        {/* <div className="prof-icon" /> */}
        {/* <i className="fa-light fa-user" />
        <button type="button" className="prof-icon">
          <FontAwesomeIcon icon={faUser} />
        </button> */}
      </nav>
    </div>
  );
}
export default Navbar;
