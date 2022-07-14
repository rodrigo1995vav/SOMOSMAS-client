import { useLocation, Navigate, Outlet } from "react-router-dom";

const RoleBasedRoutes = ({ allowedRoles }) => {
  const location = useLocation();
  const auth = {
    role: 1,
    user: "Ricardo",
  };
  return auth?.role === 1 ? (
    <Outlet />
  ) : auth?.user ? (
    <Navigate to="/user" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RoleBasedRoutes;
