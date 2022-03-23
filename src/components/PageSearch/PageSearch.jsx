import React from 'react';

import Header from '../Header';
import Container from '../Container';
import ChatSearch from '../ChatSearch';
import ChatList from '../ChatList';

import { button } from './constants';

const PageSearch = () => {
  return (
    <>
      <Header button={button} />
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
