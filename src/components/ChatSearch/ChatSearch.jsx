import React from 'react';
import Icon from '../Icon';

import styles from './ChatSearch.module.css';

const ChatSearch = () => {
  return (
    <form action="#" className={styles.form}>
      <input type="text" className={styles.input} placeholder="Поиск чата" />
      <button className={styles.button}>
        <Icon name="search" />
        <span className={styles.buttonText}>Найти</span>
      </button>
    </form>
  );
};

export default ChatSearch;
