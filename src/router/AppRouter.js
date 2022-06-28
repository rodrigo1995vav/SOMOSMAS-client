
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicRoutes from "../routes/PublicRoutes";
import PrivateRoutes from "../routes/PrivateRoutes";
import DashboardRoutes from "../routes/DashboardRoutes";

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

                </Routes>
            </div>
        </Router>
    );

}

export default AppRouter;
