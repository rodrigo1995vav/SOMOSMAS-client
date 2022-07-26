import { Route, Routes } from "react-router-dom";
import MenuByRole from "../pages/backOffice/MenuByRole";
import UsersList from "../components/UsersList/UsersList"
import CategoriesList from "../pages/backOffice/categories/CategoriesList"
import NewsAdmin from "../pages/backOffice/News/NewsAdmin"
import { ActivitiesForm } from "../pages/activities/ActivitiesForm";
import ActivitiesList from "../pages/backOffice/activities/ActivitiesList";
import Testimonials from "../pages/backOffice/testimonials/Testimonials";

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
