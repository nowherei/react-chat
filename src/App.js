import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import PageSearch from './components/PageSearch';
import PageChat from './components/PageChat';
import PageSettings from './components/PageSettings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageSearch />} />
        <Route path="chat" element={<PageChat />} />
        <Route path="settings" element={<PageSettings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
