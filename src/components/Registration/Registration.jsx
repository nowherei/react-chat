import React from 'react';
import Form from '../Form';
import { fields } from './constants';

const Registration = () => {
  return (
    <Form title="Регистрация" fields={fields} textButton="Зарегистрироваться" />
  );
};

export default Registration;
