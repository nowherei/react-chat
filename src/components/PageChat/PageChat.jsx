import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Chat from '../Chat';
import ChatNotAvailable from '../ChatNotAvailable';
import Header from '../Header';
import PageNotFound from '../PageNotFound';

import { button } from './constants';

const PageChat = () => {
  // todo
  // 1. Где лучше отлавливать 404?
  // 2. Где лучше отлавливать доступность чата?
  // 3. В MessageList есть похожие действия (скорее всего надо объединить в одно место)
  const { chatId } = useParams();
  const allChats = useSelector((state) => state.allChats);
  const { id: loggedInUserId } = useSelector((state) => state.loggedInUser);
  const currentChat = allChats.filter(({ id }) => id === +chatId);

  if (!currentChat.length) {
    return <PageNotFound />;
  }

  return (
    <>
      <Header button={button} />
      <main className="main">
        {!currentChat[0].userIds.length ||
        currentChat[0].userIds.includes(loggedInUserId) ? (
          <Chat />
        ) : (
          <ChatNotAvailable />
        )}
      </main>
    </>
  );
};

export default PageChat;
