import React from 'react';
import BookList from './components/BookList';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <h1>📚 Book List</h1>
      <BookList />
    </div>
  );
};

export default App;
