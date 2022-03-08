import React from 'react';
import ChatItem from '../ChatItem';

import { chats } from './constants';
import styles from './ChatList.module.css';

const ChatList = () => {
  return (
    <div className={styles.list}>
      {chats.map(({ id, ...rest }) => (
        <ChatItem key={id} {...rest} />
      ))}
    </div>
  );
};

export default ChatList;
