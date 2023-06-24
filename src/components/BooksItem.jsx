import React from 'react';
// import { CircularProgressbar } from 'react-circular-progressbar';
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
          <button className="re-co-it" type="button">
            Comment
          </button>
          <div className="vert-line" />
          <button
            className="re-co-it"
            type="button"
            onClick={() => clickRemove(list.id)}
          >
            Remove
          </button>
          <div className="vert-line" />
          <button className="re-co-it" type="button">
            Edit
          </button>
          <article className="second">
            <div className="circle">
              {/* <CircularProgressbar value={90} /> */}
            </div>
            <div className="progress-text">
              <p className="percentage">90%</p>
              <p className="completed">Completed</p>
            </div>
          </article>
          <div className="vert-line20" />
          <div className="info2">
            <span className="chapter">CURRENT CHAPTER</span>
            <h3 className="chapter-c">Chapter 14</h3>
            <button className="update1" type="button">
              Update progress
            </button>
          </div>
        </div>
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
