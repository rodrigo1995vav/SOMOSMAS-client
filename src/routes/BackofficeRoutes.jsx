import { Route, Routes } from "react-router-dom"
import NewsAdmin from "../pages/Backoffice/News/NewsAdmin"
import Testimonials from "../pages/testimonials/Testimonials"


const BackofficeRoutes = () => {

    return (
        <div>
            <Routes>
                <Route exact path="/news" element={<NewsAdmin />}/>
                <Route exact path="/testimonials" element={<Testimonials />}/>
            </Routes>
        </div>
    )
}

export default BackofficeRoutes