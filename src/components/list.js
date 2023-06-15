import React, { useState } from 'react'
import './App.css';
import Form from './Form';

export default function List() {
    const [books] = useState([
        {
            id:1,
            title: 'Romoe and Juliet',
            author: 'William Shakespear',
            category: 'Non-fiction',
            completed:false,

        },
        {
            id:1,
            title: 'Art of hustling',
            author: 'Dj sbu',
            category: 'Non-fiction',
            completed:false,

        },
    ]);

  return (
    <div>
        {books.map((book) => (
            <Form key={book.id}
            list={book}
            />
        ))}

    </div>
  );
}
