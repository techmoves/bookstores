import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import BooksItem from './BooksItem';
import { getBooks } from '../redux/books.js/booksSlice';

export default function BookList() {
  const { booksItem, isLoading } = useSelector((state) => state.book.bookItem);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  });

  const itemComponents = Object.keys(booksItem).flatMap((key) => BooksItem[key].map((book) => (
    <BooksItem
      key={`${key}-${book.title}`}
      list={{ item_id: key, ...book }}
    />
  )));

  return (
    <>
      <div className="Current-load"><h3>{isLoading === true ? 'Loading...' : '' }</h3></div>
      {itemComponents}
    </>
  );
}
