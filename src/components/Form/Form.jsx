import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Formik, Form as FormikForm } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { add } from '../../redux/slices/allUsersSlice';
import { auth } from '../../redux/slices/loggedInUserSlice';

import FieldList from './FieldList';

import LinkList from './LinkList';

import './Form.css';

const Form = ({ title, fields, textButton, image, links, validate }) => {
  const defaultValues = fields.reduce(
    (acc, item) => ({ ...acc, [item]: '' }),
    {}
  );

  const allUsers = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState([]);

  const handleSubmit = (values) => {
    if (pathname === '/registration') {
      const { name, surname, email, password } = values;

      if (allUsers.find((item) => item.email === email)) {
        setFormErrors([`Пользователь с email ${email} уже существует!`]);
        return null;
      }
      dispatch(add({ name, surname, email, password }));
      alert('Вы зарегистрированы!'); //todo сделать через popup
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
        setFormErrors(['Email или пароль неверные, попробуйте еще раз']);
      }
    }
  };

  const header = image ? <img src={image} alt={title} /> : title;

  return (
    <div className="form">
      <div className="form__container">
        <div className="form__inner">
          <div className="form__header">{header}</div>
          <div className="form__body">
            <Formik
              initialValues={defaultValues}
              onSubmit={handleSubmit}
              validate={validate}
            >
              {() => (
                <FormikForm noValidate>
                  {<FieldList fields={fields} />}
                  {formErrors.length
                    ? formErrors.map((item) => (
                        <div className="form__error">{item}</div>
                      ))
                    : null}
                  <button type="submit" className="form__button">
                    {textButton}
                  </button>
                </FormikForm>
              )}
            </Formik>
            <LinkList links={links} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
