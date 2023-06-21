import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books.js/booksSlice';

// add book

export default function Form() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const addSubmit = (e) => {
    e.preventDefault();
    const id = `item${Math.random()}`;
    dispatch(addBook({ id, title, author }));
    setTitle('');
    setAuthor('');
  };
  return (
    <div className="Form">
      <span className="add-newbook"> ADD NEW BOOK</span>
      <form action="" onSubmit={addSubmit}>
        <input className="input-title" placeholder="Book title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input className="input-author" placeholder="Book author" type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <button className="submit-btn" type="submit">
          ADD BOOK
        </button>
      </form>
    </div>
  );
}
