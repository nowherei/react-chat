import React, { useState } from 'react';
import Field from '../Field';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { formFields } from './constants';

import { useSelector, useDispatch } from 'react-redux';
import { add } from '../../redux/slices/allUsersSlice';
import { auth } from '../../redux/slices/loggedInUserSlice';

import './Form.css';

const Form = ({ title, fields, textButton, image, links }) => {
  const defaultValues = fields.reduce(
    (acc, item) => ({ ...acc, [item]: '' }),
    {}
  );

  const allUsers = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [values, setValues] = useState(defaultValues);

  const changeValue = (name) => {
    return (value) => {
      setValues({ ...values, [name]: value });
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (pathname === '/registration') {
      const { name, surname, email, password, repeatPassword } = values;
      if (password !== repeatPassword) {
        alert('Пароли не совпадают!');
        return null;
      }

      if (allUsers.find((item) => item.email === email)) {
        alert(`Пользователь с email ${email} уже существует!`);
        return null;
      }

      dispatch(add({ name, surname, email, password }));
      alert('Вы зарегистрированы!');
      navigate('/authorization');
    }

    if (pathname === '/authorization') {
      const currentUser = allUsers.find(
        ({ email, password }) =>
          email === values.email && password === values.password
      );
      if (currentUser) {
        dispatch(auth(currentUser));
        navigate('/chats', { replace: true });
      } else {
        alert('Ошибка авторизации');
      }
    }
  };

  const listFields = fields.map((item, index) => {
    return (
      <Field
        key={index}
        {...formFields[item]}
        value={values[item]}
        changeValue={changeValue(item)}
      />
    );
  });

  const header = image ? <img src={image} alt={title} /> : title;

  const listLinks = links ? (
    <div className="form__links">
      {links.map(({ id, href, text, type }) => {
        return (
          <Link key={id} to={href} className={`form__links-${type}`}>
            {text}
          </Link>
        );
      })}
    </div>
  ) : (
    ''
  );

  return (
    <div className="form">
      <div className="form__container">
        <div className="form__inner">
          <div className="form__header">{header}</div>
          <div className="form__body">
            <form action="#" onSubmit={handleSubmit}>
              {listFields}
              <button className="form__button">{textButton}</button>
              {listLinks}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
