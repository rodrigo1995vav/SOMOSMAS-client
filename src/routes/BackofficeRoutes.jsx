import { Route, Routes } from "react-router-dom";
import MenuByRole from "../pages/backOffice/MenuByRole";
//import Testimonials from "../pages/testimonials/Testimonials"

import NewsAdmin from "../pages/backOffice/News/NewsAdmin";

const BackofficeRoutes = () => {
  return (
    <Routes>
      <Route index element={<MenuByRole />} />
      {/* <Route exact path="/news" element={<NewsAdmin />}/> */}
      {/* <Route exact path="/testimonios/:page" element={<Testimonials />}/> */}
      <Route exact path="/news" element={<NewsAdmin />} />
    </Routes>
  );
};

export default BackofficeRoutes;
