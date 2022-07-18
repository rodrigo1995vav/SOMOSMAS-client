import { Route, Routes } from "react-router-dom"
import UsersList from "../components/UsersList/UsersList"
import CategoriesList from "../pages/Backoffice/categories/CategoriesList"
import NewsAdmin from "../pages/Backoffice/News/NewsAdmin"
import {ActivitiesForm} from '../pages/activities/ActivitiesForm.jsx';

const BackofficeRoutes = () => {

    return (

        <Routes>
            <Route exact path="/news" element={<NewsAdmin />} />
            <Route exact path="/userslist/:page" element={<UsersList />} />
            <Route exact path="/categorias/:page" element={<CategoriesList />} />
            <Route path='activities/'>
                    <Route path=':id' element={<ActivitiesForm update={true}/>} />
                    <Route path='' element={<ActivitiesForm update={false}/>} />
            </Route>

        </Routes>

    )
}

export default BackofficeRoutes