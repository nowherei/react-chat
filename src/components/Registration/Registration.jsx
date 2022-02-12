import React from "react";
import Form from "../Form";

const Registration = () => {

  const fields = [
    {
      type: 'text',
      name: 'name',
      placeholder: 'Имя',
      icon: 'user'
    },
    {
      type: 'text',
      name: 'surname',
      placeholder: 'Фамилия',
      icon: 'user'
    },
    {
      type: 'email',
      name: 'email',
      placeholder: 'Email',
      icon: 'email'
    },
    {
      type: 'password',
      name: 'password',
      placeholder: 'Пароль',
      icon: 'pass'
    },
    {
      type: 'password',
      name: 'repeat_password',
      placeholder: 'Повторите пароль',
      icon: 'pass'
    }
  ];

  return <Form title='Регистрация' fields={fields} textButton='Зарегистрироваться' />
}

export default Registration;
