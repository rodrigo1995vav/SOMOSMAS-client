
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/slices/users";


const PrivateRoutes = ({ children }) => {

    const userLogged = useSelector(selectUser);

    return (
        userLogged ? (
            children 
        ) : (
            <Navigate to="/" />
        )
    );
}

export default PrivateRoutes;