import React, { useState } from 'react';
import Booksitem from './Booksitem';

export default function BookList() {
  const [books] = useState([
    {
      id: 1,
      title: 'Romoe and Juliet',
      author: 'William Shakespear',
      completed: false,
    },
    {
      id: 1,
      title: 'Art of hustling',
      author: 'Dj sbu',
      completed: false,
    },
  ]);

  return (
    <>
      {books.map((book) => (
        <Booksitem key={book.id} list={book} />
      ))}
    </>
  );
}
