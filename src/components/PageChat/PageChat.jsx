import React from 'react';
import Chat from '../Chat';
import Header from '../Header';

import {button } from './constants';

const PageChat = () => {
  return (
    <>
      <Header button={button} />
      <main className="main">
        <Chat />
      </main>
    </>
  );
};

export default PageChat;
