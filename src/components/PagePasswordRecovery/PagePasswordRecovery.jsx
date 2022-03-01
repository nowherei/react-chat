import React from 'react';
import Form from '../Form';

import { fields, links } from './constants';

const PagePasswordRecovery = () => {
  return (
    <Form
      title="Восстановление пароля"
      fields={fields}
      textButton="Восстановить пароль"
      links={links}
    />
  );
};

export default PagePasswordRecovery;