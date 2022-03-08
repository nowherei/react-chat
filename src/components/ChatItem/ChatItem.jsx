import React from 'react';

import styles from './ChatItem.module.css';

const ChatItem = ({ name, image, messages, date }) => {
  const flagName = name ? <div className={styles.name}>{name}</div> : null;

  return (
    <div className={styles.item}>
      <div className={styles.preview}>
        <figure className={styles.imageWrapper}>
          <img src={image} alt={name} className={styles.image} />
        </figure>
        <div className={styles.date}>{date}</div>
      </div>
      <div className={styles.detail}>
        {flagName}
        {messages.map((item, index) => (
          <div key={index} className={styles.text}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatItem;
