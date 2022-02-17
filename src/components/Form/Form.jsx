import React from 'react';
import Field from '../Field';

import './Form.css';

const Form = ({ title, fields, textButton, image, links }) => {
  const listFields = fields.map(({ id, ...rest }) => {
    return <Field key={id} {...rest} />;
  });

  const header = image ? <img src={image} alt={title} /> : title;

  const listLinks = links ? (
    <div className="form__links">
      {links.map(({ id, href, text, type }) => {
        return (
          <a key={id} href={href} className={`form__links-${type}`}>
            {text}
          </a>
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
