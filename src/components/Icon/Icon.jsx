import React from 'react';

import Icons from '../../images/sprite.svg';

import './Icon.css';

const Icon = ({ name }) => (
  <svg className={`icon icon-${name}`}>
    <use xlinkHref={`${Icons}#icon-${name}`} />
  </svg>
);

export default Icon;
