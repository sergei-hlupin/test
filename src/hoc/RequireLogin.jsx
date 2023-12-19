import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { getLocalStorage } from '../services/localstorage';

const RequireLogin = ({ children }) => {
  const location = useLocation();
  const user = getLocalStorage('login');

  if (!user && location.pathname === '/profile') {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  if (user && location.pathname === '/registration') {
    return <Navigate to="/profile" replace state={{ from: location }} />;
  }

  return children;
};

export default RequireLogin;
