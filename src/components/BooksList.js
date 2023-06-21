import { useSelector } from 'react-redux';
import BooksItem from './BooksItem';

export default function BookList() {
  const books = useSelector((state) => state.book.bookItem);

  return (
    <>
      {books.map((book) => (
        <BooksItem key={book.id} list={book} />
      ))}
    </>
  );
}
