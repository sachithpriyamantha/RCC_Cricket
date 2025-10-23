
// // src/components/PrivateRoute.js
// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useAuth } from '../hooks/UseAuth';

// const PrivateRoute = ({ children, allowedRoles }) => {
//   const { isAuthenticated, userRole } = useAuth();

//   if (!isAuthenticated) {
//     return <Navigate to="/" />;
//   }

//   // Redirect if the user doesn't have an allowed role
//   if (allowedRoles && !allowedRoles.includes(userRole)) {
//     return <Navigate to="/" />;
//   }

//   return children;
// };

// export default PrivateRoute;

// src/components/PrivateRoute.js


import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/UseAuth';
const PrivateRoute = ({ children, allowedRoles }) => {
  const { isAuthenticated, userRole } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  return children;
};

export default PrivateRoute;

