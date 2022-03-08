import React from 'react';
import MessageItem from '../MessageItem';

import { messages } from './constants';

const MessageList = () => {
  return (
    <>
      {messages.map(({ id, ...rest }) => (
        <MessageItem key={id} {...rest} />
      ))}
    </>
  );
};

export default MessageList;
