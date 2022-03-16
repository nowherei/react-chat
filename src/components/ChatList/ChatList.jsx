import React from 'react';
import ChatItem from '../ChatItem';

import { useSelector } from 'react-redux';
import styles from './ChatList.module.css';

const ChatList = () => {
  const allChats = useSelector((state) => state.allChats);
  const allUsers = useSelector((state) => state.allUsers);
  const { id: loggedInUserId } = useSelector((state) => state.loggedInUser);

  const chats = allChats.filter(({ userIds }) =>
    userIds.includes(loggedInUserId)
  );

  return (
    <div className={styles.list}>
      {chats.map(({ id, userIds, history }) => {
        const [{ name, image }] = allUsers.filter(
          ({ id }) => id !== loggedInUserId && userIds.includes(id)
        );
        const data = { id, name, image };
        const countMessage = history.length;
        if (countMessage) {
          data.message = history[countMessage - 1]['message'];
          data.time = history[countMessage - 1]['time'];
        }
        return <ChatItem key={id} {...data} />;
      })}
    </div>
  );
};

export default ChatList;
