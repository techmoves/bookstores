import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import BooksItem from './BooksItem';
import { getBooks } from '../redux/books.js/booksSlice';
import Form from './Form';

export default function BookList() {
  const { booksItem, isLoading } = useSelector((store) => store.book);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const itemComponents = Object.keys(booksItem).flatMap((key) => booksItem[key].map((book) => (
    <BooksItem
      key={`${key}-${book.title}`}
      list={{ id: key, ...book }}
    />
  )));

  return (
    <>
      <Form />
      <div className="Current-load"><h3>{isLoading === true ? 'Loading...' : '' }</h3></div>
      {itemComponents}
    </>
  );
}
