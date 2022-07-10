
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicRoutes from "../routes/PublicRoutes";
import PrivateRoutes from "../routes/PrivateRoutes";
import DashboardRoutes from "../routes/DashboardRoutes";
import BackofficeRoutes from "../routes/BackofficeRoutes";

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
                            <BackofficeRoutes />
                    } />                    
                </Routes>
            </div>
        </Router>
    );

}

export default AppRouter;
