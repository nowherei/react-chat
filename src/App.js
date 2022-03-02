import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import PageAuthorization from './components/PageAuthorization';
import PageRegistration from './components/PageRegistration';
import PagePasswordRecovery from './components/PagePasswordRecovery';
import { UsersContext } from './UsersContext';

import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  return (
    <UsersContext.Provider value={[users, setUsers]}>
      <main className="main">
        <Routes>
          <Route path="authorization" element={<PageAuthorization />} />
          <Route path="registration" element={<PageRegistration />} />
          <Route path="password-recovery" element={<PagePasswordRecovery />} />
        </Routes>
      </main>
    </UsersContext.Provider>
  );
}

export default App;
