import { Route, Routes } from "react-router-dom"
import ActivitiesList from "../pages/Backoffice/activities/ActivitiesList"
import NewsAdmin from "../pages/Backoffice/News/NewsAdmin"

const BackofficeRoutes = () => {

    return (

        <Routes>
            <Route exact path="/news" element={<NewsAdmin />} />

            <Route path="/actividades/:page" element={<ActivitiesList />} />

        </Routes>

    )
}

export default BackofficeRoutes