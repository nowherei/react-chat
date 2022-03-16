import React from 'react';
import { getTime } from '../../functions';

import styles from './MessageItem.module.css';

const MessageItem = ({ name, image, message, time, direction }) => {
  const preview = (
    <>
      {image ? (
        <figure className={styles.imageWrapper}>
          <img src={image} alt={name} className={styles.image} />
        </figure>
      ) : null}
      <div className={styles.date}>{getTime(time)}</div>
    </>
  );

  return (
    <div className={`${styles.item} ${styles['item_' + direction]}`}>
      <div className={styles.preview}>
        {direction === 'to' ? preview : null}
      </div>
      <div className={styles.detail}>{message}</div>
      <div className={styles.preview}>
        {direction === 'from' ? preview : null}
      </div>
    </div>
  );
};

export default MessageItem;
