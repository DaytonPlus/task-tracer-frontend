import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const ProtectedRoute = ({ children, redirectTo = "/" }) => {
  const { user } = useAuth();
  return user ? (children || <Outlet />) : <Navigate to={redirectTo} replace />;
};

export default ProtectedRoute;
