import React, { useContext, useState } from 'react';
import Field from '../Field';
import { Link, useLocation } from 'react-router-dom';

import { formFields } from './constants';

import { UsersContext } from '../../UsersContext';

import './Form.css';

const Form = ({ title, fields, textButton, image, links }) => {
  const defaultValues = fields.reduce(
    (acc, item) => ({ ...acc, [item]: '' }),
    {}
  );

  const { pathname } = useLocation();

  const [users, setUsers] = useContext(UsersContext);

  const [values, setValues] = useState(defaultValues);

  const changeValue = (name) => {
    return (value) => {
      setValues({ ...values, [name]: value });
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (pathname === '/registration') {
      setUsers([...users, values]);
      alert('Вы зарегистрированы!');
      setValues(defaultValues);
    }

    if (pathname === '/authorization') {
      if (
        users.find(
          ({ email, password }) =>
            email === values.email && password === values.password
        )
      ) {
        alert('Добро пожаловать');
        setValues(defaultValues);
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
