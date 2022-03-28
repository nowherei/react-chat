import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import MessageItem from '../MessageItem';
import PageNotFound from '../PageNotFound';

import userDefault from '../../images/user-default-2.png';

const MessageList = () => {
  const { chatId } = useParams();
  const allChats = useSelector((state) => state.allChats);
  const allUsers = useSelector((state) => state.allUsers);
  const { id: fromUserId } = useSelector((state) => state.loggedInUser);
  const [{ userIds, history }] = allChats.filter(({ id }) => id === +chatId);

  const allUsersForChat = allUsers.reduce((acc, { id, name, image }) => {
    if (!userIds.length || userIds.includes(id)) {
      return { ...acc, [id]: { name, image } };
    }
    return acc;
  }, {});

  console.log(allUsersForChat);

  return (
    <>
      {history.map(({ id, message, time, userId }, index) => {
        const data = { message, time };
        data.name = allUsersForChat[userId].name;
        data.direction = userId === fromUserId ? 'from' : 'to';
        if (!index || history[index - 1]['userId'] !== userId) {
          data.image = allUsersForChat[userId].image
            ? allUsersForChat[userId].image
            : userDefault;
        }
        return <MessageItem key={id} {...data} />;
      })}
    </>
  );
};

export default MessageList;
