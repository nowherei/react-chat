import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ChatNotAvailable.module.css';

const ChatNotAvailable = () => {
  return (
    <div className={styles.notAvailable}>
      <div>
        <h1>У вас нет доступа к этому чату</h1>
        <p>
          <Link to="/">Перейдите на главную страницу</Link>
        </p>
      </div>
    </div>
  );
};

export default ChatNotAvailable;
