
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
                      /*   <PrivateRoutes> */ //no esta envuelt oya que esta private router solo dice si es usuario, no si es adminitrador
                      // se deberia crear un componente que verifica eso y envuelva a el componente BackofficeRoutes
                            <BackofficeRoutes />
                       /*  </PrivateRoutes> */
                    } />

                </Routes>
            </div>
        </Router>
    );

}

export default AppRouter;
