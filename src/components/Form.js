import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, fetchBooks } from '../redux/books.js/booksSlice';
import '../App.css';
// add book

export default function Form() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const addSubmit = async (e) => {
    e.preventDefault();
    const id = `item${Math.random()}`;
    await dispatch(addBook({ id, title, author }));

    await dispatch(fetchBooks({ id, title, author }));
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="Form">
      <div className="vert-line2" />
      <span className="add-newbook"> ADD NEW BOOK</span>
      <form action="" onSubmit={addSubmit}>
        <input className="input-title" placeholder="Book title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input className="input-author" placeholder="author" type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <button className="submit-btn" type="submit">
          ADD BOOK
        </button>
      </form>
    </div>
  );
}
