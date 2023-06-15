/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

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
        <div className="prof-icon"></div>
      </nav>
    </div>
  );
}
export default Navbar;
