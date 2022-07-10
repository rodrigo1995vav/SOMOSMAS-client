import React from "react";
import { useSelector } from "react-redux";
import { useLocation, Navigate} from "react-router-dom";
import { BackOffice } from "./BackOffice";


const MenuByRole = () => {
  //TODO UNCOMMENT WHEN CONNECTING TO SERVER
  //const user = useSelector((state) => state.userLogged.user)
  const location = useLocation();
  const user = {role : 1,
  name: ""}

  const nonAdminDecision = () => {
    if (user.role === 2) return <Navigate to="/auth/user" state={{ from: location }} replace />
    else return <Navigate to="/login" state={{ from: location }} replace />
  }

  return user.role === 1 ? (
    <BackOffice/>
  ) : nonAdminDecision()
};

export default MenuByRole;
