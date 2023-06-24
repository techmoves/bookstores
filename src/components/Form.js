import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books.js/booksSlice';
import '../App.css';

export default function Form() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const addSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addBook({
        item_id: uuidv4(),
        title,
        author,
        category: 'Action',
      }),
    );
    setTitle('');
    setAuthor('');
  };
  return (
    <div className="Form">
      <div className="vert-line2" />
      <span className="add-newbook"> ADD NEW BOOK</span>
      <form action="" onSubmit={addSubmit}>
        <input
          className="input-title"
          placeholder="Book title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="input-author"
          placeholder="author"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button className="submit-btn" type="submit">
          ADD BOOK
        </button>
      </form>
    </div>
  );
}
