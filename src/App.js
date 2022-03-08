import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { UsersContext } from './UsersContext';
import PageAuthorization from './components/PageAuthorization';
import PageRegistration from './components/PageRegistration';
import PagePasswordRecovery from './components/PagePasswordRecovery';
import PageSearch from './components/PageSearch';
import PageChat from './components/PageChat';
import PageSettings from './components/PageSettings';

import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  return (
    <UsersContext.Provider value={[users, setUsers]}>
      <main className="main">
        <Routes>
          <Route path="/" element={<PageSearch />} />
          <Route path="chat" element={<PageChat />} />
          <Route path="settings" element={<PageSettings />} />
          <Route path="authorization" element={<PageAuthorization />} />
          <Route path="registration" element={<PageRegistration />} />
          <Route path="password-recovery" element={<PagePasswordRecovery />} />
        </Routes>
      </main>
    </UsersContext.Provider>
  );
}

export default App;
