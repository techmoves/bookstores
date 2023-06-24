import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import BooksItem from './BooksItem';
import { fetchBooks } from '../redux/books.js/booksSlice'; // Assuming you have a separate fetchBooks async thunk action

export default function BookList() {
  const { bookItem } = useSelector((store) => store.book);
  const appId = 'k68fWhjOzM4PUApMv3rM';
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks(appId)); // Dispatch the fetchBooks async thunk action instead of getBooks
  }, [dispatch]);
  // console.log(bookItem);
  return (
    <>
      {bookItem.map((item) => (
        <BooksItem key={uuidv4()} list={item} />
      ))}
    </>
  );
}
