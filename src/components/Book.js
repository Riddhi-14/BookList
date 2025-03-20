import React, { useState } from 'react';
import styles from './Book.module.css';

const Book = ({ title, author, year, description }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className={styles.bookCard}>
      <h2>{title}</h2>
      <p><strong>Author:</strong> {author}</p>
      <p><strong>Published:</strong> {year}</p>
      <button onClick={() => setShowDescription(!showDescription)}>
        {showDescription ? 'Hide Description' : 'Show Description'}
      </button>
      {showDescription && <p className={styles.description}>{description}</p>}
    </div>
  );
};

export default Book;
