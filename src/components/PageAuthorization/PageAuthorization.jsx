import React from 'react';
import Form from '../Form';

import { fields, links } from './constants';
import iconAuth from '../../images/icon-auth.svg';

const PageAuthorization = () => {
  return (
    <Form
      title="Авторизация"
      fields={fields}
      textButton="Войти"
      image={iconAuth}
      links={links}
    />
  );
};

export default PageAuthorization;
