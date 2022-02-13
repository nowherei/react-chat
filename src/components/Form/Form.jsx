import React from 'react';
import Field from '../Field';

import './Form.css';

const Form = ({ title, fields, textButton, image, showLinks }) => {
  const listFields = fields.map((props, index) => {
    return <Field key={index + 1} {...props} />;
  });

  const header = image ? <img src={image} alt={title} /> : title;

  const links = showLinks ? (
    <div className="form__links">
      <a href="#" className="form__links-forgot-password">
        Забыли пароль?
      </a>
      <a href="#" className="form__links-auth">
        Регистрация
      </a>
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
            <form action="#">
              {listFields}
              <button className="form__button">{textButton}</button>
              {links}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
