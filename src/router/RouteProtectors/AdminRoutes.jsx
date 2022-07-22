
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/slices/users";

const AdminRoutes = ({ children }) => {

    const userLogged = useSelector(selectUser);
    


    return (
        userLogged ? (
            userLogged.user.roleId === 1 ? (
                children
            ) : (
                    <Navigate to="/" />
                )
        ) : (
            <Navigate to="/" />
        )
    );
}

export default AdminRoutes;