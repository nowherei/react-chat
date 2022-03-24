import React from 'react';
import { Link } from 'react-router-dom';
import { getTime } from '../../functions';

import styles from './ChatItem.module.css';

const ChatItem = ({ id, name, image, message, time }) => {
  const flagName = name ? <div className={styles.name}>{name}</div> : null;

  return (
    <Link className={styles.item} to={`/chats/${id}`}>
      <div className={styles.preview}>
        <figure className={styles.imageWrapper}>
          <img src={image} alt={name} className={styles.image} />
        </figure>
        {time ? <div className={styles.date}>{getTime(time)}</div> : null}
      </div>
      <div className={styles.detail}>
        {flagName}
        {message ? <div className={styles.text}>{message}</div> : null}
      </div>
    </Link>
  );
};

export default ChatItem;
