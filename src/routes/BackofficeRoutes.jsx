import { Route, Routes } from "react-router-dom";
import MenuByRole from "../pages/Backoffice/MenuByRole";
import UsersList from "../components/UsersList/UsersList"
import CategoriesList from "../pages/Backoffice/categories/CategoriesList"
import NewsAdmin from "../pages/Backoffice/News/NewsAdmin"
import { ActivitiesForm } from "../pages/activities/ActivitiesForm";
import ActivitiesList from "../pages/Backoffice/activities/ActivitiesList";
import Testimonials from "../pages/Backoffice/testimonials/Testimonials";

const BackofficeRoutes = () => {
    return (


        <Routes>
            <Route index element={<MenuByRole />} />
            <Route exact path="/news/:page" element={<NewsAdmin />} />
            <Route exact path="/testimonials/:page" element={<Testimonials />} />
            <Route exact path="/userslist/:page" element={<UsersList />} />
            <Route exact path="/categorias/:page" element={<CategoriesList />} />
            <Route path="/actividades/:page" element={<ActivitiesList />} />
            <Route path='activities/'>
                <Route path=':id' element={<ActivitiesForm update={true} />} />
                <Route path='' element={<ActivitiesForm update={false} />} />
            </Route>
        </Routes>
    );
};

export default BackofficeRoutes
