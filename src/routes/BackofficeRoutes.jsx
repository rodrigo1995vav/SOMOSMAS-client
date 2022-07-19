import { Route, Routes } from "react-router-dom";
import MenuByRole from "../pages/backOffice/MenuByRole";
//import Testimonials from "../pages/testimonials/Testimonials"
import NewsAdmin from "../pages/backOffice/News/NewsAdmin";
import UsersList from "../components/UsersList/UsersList"
import CategoriesList from "../pages/Backoffice/categories/CategoriesList"
import NewsAdmin from "../pages/Backoffice/News/NewsAdmin"

const BackofficeRoutes = () => {
  return (
    <Routes>
      <Route index element={<MenuByRole />} />
      {/* <Route exact path="/testimonios/:page" element={<Testimonials />}/> */}
      <Route exact path="/news" element={<NewsAdmin />}/> 
      <Route exact path="/userslist/:page" element={<UsersList/>}/>
      <Route exact path="/categorias/:page" element={<CategoriesList />} />
    </Routes>
  );
};

export default BackofficeRoutes
