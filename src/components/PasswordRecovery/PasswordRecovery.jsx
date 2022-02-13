import React from 'react';
import Form from '../Form';

import { fields } from './constants';

const PasswordRecovery = () => {
  return (
    <Form
      title="Восстановление пароля"
      fields={fields}
      textButton="Восстановить пароль"
    />
  );
};

export default PasswordRecovery;
