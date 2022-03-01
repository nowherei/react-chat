import React, { useState } from 'react';
import Icon from '../Icon';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

import './Field.css';

const Field = ({ type, name, placeholder, icon }) => {
  const [hidden, setHidden] = useState(true);

  const togglePassword = () => {
    setHidden(!hidden);
  };

  const showPass = (
    <div className="form__field-show-pass" onClick={togglePassword}>
      {hidden ? (
        <AiFillEye className="icon" />
      ) : (
        <AiFillEyeInvisible className="icon" />
      )}
    </div>
  );

  const flagPass = type === 'password' ? showPass : '';

  return (
    <div className={`form__field form__field_${type}`}>
      <input
        type={hidden ? type : 'text'}
        className="form__field-input"
        placeholder={placeholder}
        name={name}
      />
      <div className="form__field-icon">
        <Icon name={icon} />
      </div>
      {flagPass}
    </div>
  );
};

export default Field;
