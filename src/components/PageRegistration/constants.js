import { store } from "../../redux/store";
console.log(store);

export const fields = [
  'name',
  'surname',
  'email',
  'password',
  'repeatPassword',
];

export const links = [
  { id: 1, href: '/authorization', text: 'Авторизация', type: 'black' },
];

export const validate = (values) => {
  const errors = {};

  // todo как получить allUsers из store здесь?!!!
  // const allUsers = useSelector((state) => state.allUsers);

  if (!values.name) {
    errors.name = 'Обязательное поле';
  }

  if (!values.surname) {
    errors.surname = 'Обязательное поле';
  }

  if (!values.email) {
    errors.email = 'Обязательное поле';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Некорректный email';
  }/*  else if (allUsers.find((item) => item.email === values.email)) {
    errors.email = `Пользователь с email ${values.email} уже существует!`;
  } */

  if (!values.password) {
    errors.password = 'Обязательное поле';
  }

  if (!values.repeatPassword) {
    errors.repeatPassword = 'Обязательное поле';
  } else if (values.password !== values.repeatPassword) {
    errors.repeatPassword = 'Пароли не совпадают';
  }

  return errors;
};
