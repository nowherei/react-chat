import React from "react";
import Icon from "../Icon";

import './Field.css';

const Field = ({type, name, placeholder, icon }) => {

  const showPass = (
    <div className="form__field-show-pass">
      <Icon name="show-pass" />
    </div>
  );

  const flagPass = type === 'password' ? showPass : '';

  return (
    <div className={`form__field form__field_${type}`}>
      <input
        type={type}
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
}

export default Field;