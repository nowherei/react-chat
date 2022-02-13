import React from 'react';
import Field from '../Field';

import './Form.css';

const Form = ({ title, fields, textButton }) => {
  const listFields = fields.map((props, index) => {
    return (
      <Field key={index + 1} {...props} />
    );
  });

  return (
    <div className="form">
      <div className="form__container">
        <div className="form__inner">
          <div className="form__header">{title}</div>
          <div className="form__body">
            <form action="#">
              {listFields}
              <button className="form__button">{textButton}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
