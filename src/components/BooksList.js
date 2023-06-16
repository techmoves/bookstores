import React, { useState } from 'react';
import BooksItem from './booksitem';

export default function BookList() {
  const [books] = useState([
    {
      id: 1,
      title: 'Romoe and Juliet',
      author: 'William Shakespear',
      category: 'Non-fiction',
      completed: false,
    },
    {
      id: 1,
      title: 'Art of hustling',
      author: 'Dj sbu',
      category: 'Non-fiction',
      completed: false,
    },
  ]);

  return (
    <>
      {books.map((book) => (
        <BooksItem key={book.id} list={book} />
      ))}
    </>
  );
}
