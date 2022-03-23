import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const RequireAuth = ({ children }) => {
  const loggedInUser = useSelector((state) => state.loggedInUser);
  return loggedInUser ? children : <Navigate replace to="/authorization" />;
};

export default RequireAuth;