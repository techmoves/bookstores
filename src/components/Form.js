import React from 'react';

// add book

export default function Form() {
  return (
    <div className="Form">
      <span className="add-newbook"> ADD NEW BOOK</span>
      <form action="">
        <input className="input-title" placeholder="Book title" type="text" />
        <input
          className="input-author"
          placeholder="Book author"
          type="text"
        />
        <button className="submit-btn" type="submit">
          ADD BOOK
        </button>
      </form>
    </div>
  );
}
