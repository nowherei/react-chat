import React, { useState } from 'react';
import Icon from '../Icon';

import styles from './ChatSearch.module.css';

const ChatSearch = ({ setSearch }) => {
  const [value, setValue] = useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(value);
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.input}
        placeholder="Поиск чата"
        value={value}
        onChange={handleChange}
      />
      <button className={styles.button}>
        <Icon name="search" />
        <span className={styles.buttonText}>Найти</span>
      </button>
    </form>
  );
};

export default ChatSearch;
