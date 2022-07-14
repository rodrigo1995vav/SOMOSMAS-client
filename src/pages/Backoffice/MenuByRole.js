import React from "react";
import { useSelector } from "react-redux";
import { useLocation, Navigate} from "react-router-dom";
import { BackOffice } from "./BackOffice";


const MenuByRole = () => {
  const user = useSelector((state) => state.userLogged.user.user) 
  const location = useLocation();

  const nonAdminDecision = () => {
    if (user.roleId === 2) return <Navigate to="/auth/user" state={{ from: location }} replace />
    else return <Navigate to="/login" state={{ from: location }} replace />
  }

  return user.roleId === 1 ? (
    <BackOffice/>
  ) : nonAdminDecision()
};

export default MenuByRole;
