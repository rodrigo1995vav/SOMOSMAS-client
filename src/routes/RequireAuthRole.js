import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";


const RequireAuthRole = ({ allowedRoles }) => {
  const location = useLocation();

  //TODO Here we should grab the user data from redux store... hardcoding user for now 
  const auth = {
    role: 1,
    user: "Ricardo",
  };

  return allowedRoles.includes(auth.role) ? (
    <Outlet />
  ) : auth.user ? (
    //path to user profile may be different, check routes 
    <Navigate to="/user" state={{ from: location }} replace />
  ) : (
    //path to user login may be different, check routes 
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuthRole;
