
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicRoutes from "../routes/PublicRoutes";
import PrivateRoutes from "../routes/PrivateRoutes";
import DashboardRoutes from "../routes/DashboardRoutes";
import BackofficeRoutes from "../routes/BackofficeRoutes";
import RequireAuthRole from "../routes/RequireAuthRole";

const ROLES = {
    'User': 2,
    'Admin': 1,
  };

const AppRouter = () => {

    return (
        <Router>
            <div>
                <Routes>
                    
                    <Route path="/*" element={<PublicRoutes />} />

                    <Route path="/auth/*" element={
                        <PrivateRoutes>
                            <DashboardRoutes />
                        </PrivateRoutes>
                    } />
                    <Route path="/backoffice/*" element={ 
                       <RequireAuthRole allowedRoles={[ROLES.Admin]}>
                            <BackofficeRoutes />
                       </RequireAuthRole>
                    } />

                </Routes>
            </div>
        </Router>
    );

}

export default AppRouter;
