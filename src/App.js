import Form from './components/Form';

import {
  registrationFields,
  authFields,
  passwordRecoveryFields,
  formLinks,
} from './constants';

import './App.css';
import iconAuth from './images/icon-auth.svg';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <main className="main">
      <Routes>
        <Route
          path="/"
          element={
            <Form
              title="Авторизация"
              fields={authFields}
              textButton="Войти"
              image={iconAuth}
              links={formLinks.auth}
            />
          }
        />
        <Route
          path="registration"
          element={
            <Form
              title="Регистрация"
              fields={registrationFields}
              textButton="Зарегистрироваться"
              links={formLinks.registration}
            />
          }
        />
        <Route
          path="password-recovery"
          element={
            <Form
              title="Восстановление пароля"
              fields={passwordRecoveryFields}
              textButton="Восстановить пароль"
              links={formLinks.registration}
            />
          }
        />
      </Routes>
    </main>
  );
}

export default App;
