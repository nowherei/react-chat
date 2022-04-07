export const fields = ['email', 'password'];

export const links = [
  {
    id: 1,
    href: '/password-recovery',
    text: 'Забыли пароль?',
    type: 'black',
  },
  { id: 2, href: '/registration', text: 'Регистрация', type: 'blue' },
];

export const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Обязательное поле';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Некорректный email';
  }

  if (!values.password) {
    errors.password = 'Обязательное поле';
  }

  return errors;
};