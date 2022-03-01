import React from 'react';
import Field from '../Field';
import { Link } from 'react-router-dom';

import { formFields } from './constants';

import './Form.css';

const Form = ({ title, fields, textButton, image, links }) => {
  const listFields = fields.map((item, index) => {
    return <Field key={index} {...formFields[item]} />;
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
            <form action="#">
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
