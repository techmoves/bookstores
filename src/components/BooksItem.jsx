import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

export default function BooksItem({ list }) {
  const dispatch = useDispatch();

  const handleRemove = async (id) => {
    await dispatch(removeBook(id));
    await dispatch(getBooks());
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
          <button type="button" onClick={() => handleRemove(list.item_id)}>Remove</button>
          <div className="vert-line" />
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="book-progress" />
      <div className="progress-update" />
    </div>
  );
}

BooksItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  list: PropTypes.string.isRequired,
};
