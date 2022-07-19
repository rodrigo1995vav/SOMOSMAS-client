import { Route, Routes } from "react-router-dom"
import ActivitiesList from "../pages/Backoffice/activities/ActivitiesList"
import NewsAdmin from "../pages/Backoffice/News/NewsAdmin"
import UsersList from "../components/UsersList/UsersList"
import MenuByRole from "../pages/backOffice/MenuByRole";
import Testimonials from "../pages/testimonials/Testimonials"
import CategoriesList from "../pages/Backoffice/categories/CategoriesList"
import { ActivitiesForm } from '../pages/activities/ActivitiesForm.jsx';


const BackofficeRoutes = () => {
  return (
    <Routes>
      <Route index element={<MenuByRole />} />
      <Route exact path="/novedades" element={<NewsAdmin />}/>
      <Route exact path="/testimonios/:page" element={<Testimonials />}/>
      <Route exact path="/listaUsuarios/:page" element={<UsersList />} />
      <Route exact path="/categorias/:page" element={<CategoriesList />} />
      <Route path="/actividades/:page" element={<ActivitiesList />} />
      <Route path='actividades/'>
        <Route path=':id' element={<ActivitiesForm update={true} />} />
        <Route path='' element={<ActivitiesForm update={false} />} />
      </Route>
    </Routes>
  );
};

export default BackofficeRoutes
