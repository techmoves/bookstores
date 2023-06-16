import React, { useState } from 'react';

import BookList from './BookList';

export default function books() {
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
    <div>
      <BookList books={books} />
    </div>
  );
}
