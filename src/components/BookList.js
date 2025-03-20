import React, { useState } from 'react';
import Book from './Book';
import styles from './BookList.module.css';

const initialBooks = [
  {
    id: 1,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    description: 'A novel about the serious issues of rape and racial inequality.'
  },
  {
    id: 2,
    title: '1984',
    author: 'George Orwell',
    year: 1949,
    description: 'A dystopian novel set in a totalitarian society under constant surveillance.'
  },
  {
    id: 3,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    year: 1813,
    description: 'A romantic novel that also critiques the British landed gentry of the early 19th century.'
  }
];

const BookList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = initialBooks.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search by title or author..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchBar}
      />
      <div className={styles.bookList}>
        {filteredBooks.map(book => (
          <Book key={book.id} {...book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
