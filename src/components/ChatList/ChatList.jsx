import React from 'react';
import ChatItem from '../ChatItem';

import { useSelector } from 'react-redux';
import styles from './ChatList.module.css';

import moreUsers from '../../images/all-users.png';

const ChatList = ({ search }) => {
  const allChats = useSelector((state) => state.allChats);
  const allUsers = useSelector((state) => state.allUsers);
  const { id: loggedInUserId, image: loggedInUserImage } = useSelector(
    (state) => state.loggedInUser
  );

  const chats = allChats.filter(
    ({ userIds, name }) =>
      (!userIds.length || userIds.includes(loggedInUserId)) &&
      (!search || name.search(new RegExp(search, 'i')) !== -1)
  );

  return (
    <div className={styles.list}>
      {!chats.length
        ? <div className={styles.empty}>Чаты не найдены</div>
        : chats.map(({ id, name, userIds, history }) => {
            let image = moreUsers;
            if (userIds.length === 1) {
              image = loggedInUserImage;
            }
            if (userIds.length === 2) {
              [{ image }] = allUsers.filter(
                ({ id }) => id !== loggedInUserId && userIds.includes(id)
              );
            }
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
