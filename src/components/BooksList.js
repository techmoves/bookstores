import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import BooksItem from './BooksItem';
import { fetchBooks } from '../redux/books.js/booksSlice'; // Assuming you have a separate fetchBooks async thunk action

export default function BookList() {
  const { booksItem, isLoading } = useSelector((store) => store.book);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks()); // Dispatch the fetchBooks async thunk action instead of getBooks
  }, [dispatch]);

  const itemComponents = booksItem
    ? Object.keys(booksItem).flatMap((key) => booksItem[key].map((book) => (
      <BooksItem key={`${key}-${book.title}`} list={{ id: key, ...book }} />
    )))
    : [];

  // const itemComponents = Object.keys(booksItem || {}).flatMap((key) =>
  //   booksItem[key].map((book) => (
  //     <BooksItem key={`${key}-${book.title}`} list={{ id: key, ...book }} />
  //   ))
  // );

  return (
    <>
      <div className="Current-load">
        <h3>{isLoading === true ? 'Loading...' : ''}</h3>
      </div>
      {itemComponents}
    </>
  );
}
