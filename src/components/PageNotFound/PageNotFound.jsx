import React from 'react';
import { Link } from 'react-router-dom';

import './PageNotFound.css';

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <div>
        <h1>404 - Страница не найдена</h1>
        <p>
          <Link to="/">Перейдите на главную страницу</Link>
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;
