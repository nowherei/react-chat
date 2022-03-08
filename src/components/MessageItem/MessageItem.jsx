import React from 'react';

import styles from './MessageItem.module.css';

const MessageItem = ({ name, image, messages, date, direction }) => {
  const preview = (
    <>
      <figure className={styles.imageWrapper}>
        <img src={image} alt={name} className={styles.image} />
      </figure>
      <div className={styles.date}>{date}</div>
    </>
  );

  return (
    <div className={`${styles.item} ${styles['item_' + direction]}`}>
      <div className={styles.preview}>
        {direction === 'to' ? preview : null}
      </div>
      <div className={styles.detail}>
        {messages.map((item, index) => (
          <div key={index} className={styles.text}>
            {item}
          </div>
        ))}
      </div>
      <div className={styles.preview}>
        {direction === 'from' ? preview : null}
      </div>
    </div>
  );
};

export default MessageItem;
