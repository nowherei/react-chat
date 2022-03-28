import React, { useState } from 'react';

import Header from '../Header';
import Container from '../Container';
import ChatSearch from '../ChatSearch';
import ChatList from '../ChatList';

import { button } from './constants';

const PageSearch = () => {
  const [search, setSearch] = useState('');
  return (
    <>
      <Header button={button} />
      <main className="main">
        <Container>
          <ChatSearch setSearch={setSearch} />
          <ChatList search={search} />
        </Container>
      </main>
    </>
  );
};

export default PageSearch;
