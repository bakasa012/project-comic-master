import React from 'react';
import useAuth from '../../contexts/auth.context/Auth.context';
import { useLocation, Navigate } from 'react-router-dom';
const RequireAuthComponent = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) return <Navigate to="/login" state={{ from: location }} replace />;

  return children;
};

export default RequireAuthComponent;
