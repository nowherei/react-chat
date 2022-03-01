import React from 'react';
import Form from '../Form';

import { fields, links } from './constants';

const PageRegistration = () => {
  return (
    <Form
      title="Регистрация"
      fields={fields}
      textButton="Зарегистрироваться"
      links={links}
    />
  );
};

export default PageRegistration;
