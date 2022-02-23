import React from 'react';
import ChatItem from '../ChatItem';

import { chats, messages } from './constants';
import styles from './ChatList.module.css';

const ChatList = ({ type }) => {

  if (type === 'message') {
    return (
      <>
        {messages.map(({ id, ...rest }) => (
          <ChatItem key={id} type={type} {...rest} />
        ))}
      </>
    );
  }

  return (
    <div className={styles.list}>
      {chats.map(({ id, ...rest }) => (
        <ChatItem key={id} type={type} {...rest} />
      ))}
    </div>
  );
};

export default ChatList;
