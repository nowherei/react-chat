import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageAuthorization from './components/PageAuthorization';
import PageRegistration from './components/PageRegistration';
import PagePasswordRecovery from './components/PagePasswordRecovery';

import './App.css';

function App() {
  return (
    <main className="main">
      <Routes>
        <Route path="authorization" element={<PageAuthorization />} />
        <Route path="registration" element={<PageRegistration />} />
        <Route path="password-recovery" element={<PagePasswordRecovery />} />
      </Routes>
    </main>
  );
}

export default App;
