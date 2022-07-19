import { Route, Routes } from "react-router-dom"
import UsersList from "../components/UsersList/UsersList"
=======
import CategoriesList from "../pages/Backoffice/categories/CategoriesList"
import NewsAdmin from "../pages/Backoffice/News/NewsAdmin"

const BackofficeRoutes = () => {

    return (

        <Routes>
            <Route exact path="/news" element={<NewsAdmin />} />
            <Route exact path="/userslist/:page" element={<UsersList />} />
            <Route exact path="/categorias/:page" element={<CategoriesList />} />
        </Routes>

    )
}

export default BackofficeRoutes