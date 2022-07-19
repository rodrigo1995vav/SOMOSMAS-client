import { Route, Routes } from "react-router-dom"
import ActivitiesList from "../pages/Backoffice/activities/ActivitiesList"
import NewsAdmin from "../pages/Backoffice/News/NewsAdmin"
import UsersList from "../components/UsersList/UsersList"
import MenuByRole from "../pages/backOffice/MenuByRole";
//import Testimonials from "../pages/testimonials/Testimonials"
import CategoriesList from "../pages/Backoffice/categories/CategoriesList"


const BackofficeRoutes = () => {
  return (
    <Routes>
      <Route index element={<MenuByRole />} />
      {/* <Route exact path="/testimonios/:page" element={<Testimonials />}/> */}
      <Route exact path="/news" element={<NewsAdmin />}/> 
      <Route exact path="/userslist/:page" element={<UsersList/>}/>
      <Route exact path="/categorias/:page" element={<CategoriesList />} />
      <Route path="/actividades/:page" element={<ActivitiesList />} />
    </Routes>
  );
};

export default BackofficeRoutes
