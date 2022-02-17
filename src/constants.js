const fields = {
  name: {
    type: 'text',
    name: 'name',
    placeholder: 'Имя',
    icon: 'user',
  },
  surname: {
    type: 'text',
    name: 'surname',
    placeholder: 'Фамилия',
    icon: 'user',
  },
  email: {
    type: 'email',
    name: 'email',
    placeholder: 'Email',
    icon: 'email',
  },
  password: {
    type: 'password',
    name: 'password',
    placeholder: 'Пароль',
    icon: 'pass',
  },
  repeatPassword: {
    type: 'password',
    name: 'repeat_password',
    placeholder: 'Повторите пароль',
    icon: 'pass',
  },
};

export const registrationFields = [
  {
    ...fields.name,
    id: 1,
  },
  {
    ...fields.surname,
    id: 2,
  },
  {
    ...fields.email,
    id: 3,
  },
  {
    ...fields.password,
    id: 4,
  },
  {
    ...fields.repeatPassword,
    id: 5,
  },
];

export const authFields = [
  {
    ...fields.email,
    id: 1,
  },
  {
    ...fields.password,
    id: 2,
  },
];

export const passwordRecoveryFields = [
  {
    ...fields.email,
    id: 1,
  },
  {
    ...fields.password,
    id: 2,
  },
  {
    ...fields.repeatPassword,
    id: 3,
  },
];

export const formLinks = {
  auth: [
    {
      id: 1,
      href: '/password-recovery',
      text: 'Забыли пароль?',
      type: 'black',
    },
    { id: 2, href: '/registration', text: 'Регистрация', type: 'blue' },
  ],
  registration: [{ id: 1, href: '/', text: 'Авторизация', type: 'black' }],
};
