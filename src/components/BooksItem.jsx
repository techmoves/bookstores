import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchBooks, removeBook } from '../redux/books.js/booksSlice';
import '../App.css';

export default function BooksItem({ list }) {
  const dispatch = useDispatch();

  const clickRemove = async (id) => {
    await dispatch(removeBook(id));
    await dispatch(fetchBooks());
  };
  return (
    <div>
      <div className="book-oder">
        <div className="info">
          <span className="category">{list.category}</span>
          <h3 className="title">{list.title}</h3>
          <span className="author">{list.author}</span>
        </div>
        <div className="add-features">
          <button type="button">Comment</button>
          <div className="vert-line" />
          <button type="button" onClick={() => clickRemove(list.id)}>
            Remove
          </button>
          <div className="vert-line" />
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="book-progress" />
      <div
        className="pro"
        style={{
          '--clr': 'rgb(59, 59, 245)',
          '--num': 65,
        }}
      />
      <div className="progress-update" />
      <div className="vert-line55" />
      <div className="info">
        <span className="chapter">CURRENT CHAPTER</span>
        <h3 className="chapter c-size">Chapter 14</h3>
        <button className="update-progress btn" type="button">
          Update progress
        </button>
      </div>
    </div>
  );
}

BooksItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  list: PropTypes.string.isRequired,
};
