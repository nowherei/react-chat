import React from 'react';

import Header from '../Header';
import Container from '../Container';
import ChatSearch from '../ChatSearch';
import ChatList from '../ChatList';

import { user, button } from './constants';

const PageSearch = () => {
  return (
    <>
      <Header user={user} button={button} />
      <main className="main">
        <Container>
          <ChatSearch />
          <ChatList />
        </Container>
      </main>
    </>
  );
};

export default PageSearch;
