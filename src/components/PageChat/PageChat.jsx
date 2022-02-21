import React from 'react';
import Chat from '../Chat';
import Header from '../Header';

import { user, button } from './constants';

const PageChat = () => {
  return (
    <>
      <Header user={user} button={button} />
      <Chat />
    </>
  );
}

export default PageChat;