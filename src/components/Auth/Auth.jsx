import React from 'react';
import Form from '../Form';

import { fields } from './constants';
import iconAuth from '../../images/icon-auth.svg';

const Registration = () => {
  return (
    <Form
      title="Авторизация"
      fields={fields}
      textButton="Восстановить пароль"
      image={iconAuth}
      showLinks={true}
    />
  );
};

export default Registration;
