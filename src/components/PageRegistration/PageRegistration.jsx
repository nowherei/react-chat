import React from 'react';
import Form from '../Form';

import { fields, links, validate } from './constants';

const PageRegistration = () => {
  return (
    <Form
      title="Регистрация"
      fields={fields}
      textButton="Зарегистрироваться"
      links={links}
      validate={validate}
    />
  );
};

export default PageRegistration;
