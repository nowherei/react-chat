import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import MessageItem from '../MessageItem';

const MessageList = () => {
  const { chatId } = useParams();
  const allChats = useSelector((state) => state.allChats);
  const allUsers = useSelector((state) => state.allUsers);
  const { id: fromUserId, image: fromUserImage, name: fromUserName } = useSelector(
    (state) => state.loggedInUser
  );
  const [{ userIds, history }] = allChats.filter(
    ({ id }) => id === parseInt(chatId)
  );
  const [{ image: toUserImage, name: toUserName }] = allUsers.filter(
    ({ id }) => id !== fromUserId && userIds.includes(id)
  );

  return (
    <>
      {history.map(({ id, message, time, userId }, index) => {
        const data = {message, time};
        data.name = userId === fromUserId ? fromUserName : toUserName;
        data.direction = userId === fromUserId ? 'from' : 'to';
        if (!index || history[index - 1]['userId'] !== userId) {
          data.image = userId === fromUserId ? fromUserImage : toUserImage;
        }
        return <MessageItem key={id} {...data} />;
      })}
    </>
  );
};

export default MessageList;
