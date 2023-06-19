import React from 'react';
import Form from '../components/Form';
import BookList from '../components/BooksList';

export default function Home() {
  return (
    <div>
      <BookList />
      <Form />
    </div>
  );
}
