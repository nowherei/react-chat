import React from 'react';

import styles from './ChatItem.module.css';
import userImage from '../../images/user-2.png';

const ChatItem = ({ name, image, text, date }) => {
  return (
    <div className={styles.item}>
      <div className={styles.preview}>
        <figure className={styles.imageWrapper}>
          <img src={image} alt={name} className={styles.image} />
        </figure>
        <div className={styles.date}>{date}</div>
      </div>
      <div className={styles.detail}>
        <div className={styles.name}>ФИО клиента</div>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
};

export default ChatItem;
