import './App.css';

import Registration from './components/Registration';
import PasswordRecovery from './components/PasswordRecovery';
import Auth from './components/Auth';

function App() {
  return (
    <main className="main">
      <Registration />
      <PasswordRecovery />
      <Auth />
    </main>
  );
}

export default App;
