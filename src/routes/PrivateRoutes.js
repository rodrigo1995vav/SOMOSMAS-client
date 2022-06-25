
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {

    //Test variable to see if user is logged in 
    const userLogged = true

    return (
        userLogged ? (
            children 
        ) : (
            <Navigate to="/" />
        )
    );
}

export default PrivateRoutes;