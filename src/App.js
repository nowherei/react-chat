import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PageAuthorization from './components/PageAuthorization';
import PageRegistration from './components/PageRegistration';
import PagePasswordRecovery from './components/PagePasswordRecovery';
import PageSearch from './components/PageSearch';
import PageChat from './components/PageChat';
import PageSettings from './components/PageSettings';
import PageNotFound from './components/PageNotFound';
import RequireAuth from './components/RequireAuth';

import './App.css';

function App() {
  return (
    <main className="main">
      <Routes>
        <Route path="authorization" element={<PageAuthorization />} />
        <Route path="registration" element={<PageRegistration />} />
        <Route path="password-recovery" element={<PagePasswordRecovery />} />
        <Route
          path="chats"
          element={
            <RequireAuth>
              <PageSearch />
            </RequireAuth>
          }
        />
        <Route
          path="chats/:chatId"
          element={
            <RequireAuth>
              <PageChat />
            </RequireAuth>
          }
        />
        <Route
          path="settings"
          element={
            <RequireAuth>
              <PageSettings />
            </RequireAuth>
          }
        />
        <Route
          path="/"
          element={
            <RequireAuth>
              <Navigate replace to="/chats" />
            </RequireAuth>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  );
}

export default App;
