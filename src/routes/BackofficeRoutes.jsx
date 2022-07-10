import { Route, Routes } from "react-router-dom"
import TableActivities from "../components/BackOffice/activities/TableActivities"
import NewsAdmin from "../pages/Backoffice/News/NewsAdmin"
/* import Testimonials from "../pages/testimonials/Testimonials" */


const BackofficeRoutes = () => {

    return (
            <Routes>
                <Route exact path="/news" element={<NewsAdmin />}/>
            {/*     <Route exact path="/testimonios/:page" element={<Testimonials />}/> */}
            </Routes>
      
    )
}

export default BackofficeRoutes