import { Route, Routes } from "react-router-dom"
import TableActivities from "../components/BackOffice/activities/TableActivities"
import NewsAdmin from "../pages/Backoffice/News/NewsAdmin"

const BackofficeRoutes = () => {

    return (
            <Routes>
                <Route exact path="/news" element={<NewsAdmin />} />

                <Route exact path="/activities" element={<TableActivities/>} />

            </Routes>
      
    )
}

export default BackofficeRoutes