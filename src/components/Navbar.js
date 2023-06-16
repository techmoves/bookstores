import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav>
        <h1 className="topic">Techmoves Books</h1>
        <ul>
          <li>
            <Link className="link" to="/">
              Books
            </Link>
          </li>
          <li>
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
