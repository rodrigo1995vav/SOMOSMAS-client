import { Route, Routes } from "react-router-dom"
import MenuByRole from "../pages/backOffice/MenuByRole"
//import NewsAdmin from "../pages/Backoffice/News/NewsAdmin"
//import Testimonials from "../pages/testimonials/Testimonials"


const BackofficeRoutes = () => {

    return (
        <div>
            <Routes>
            <Route index element={<MenuByRole />} />
                {/* <Route exact path="/news" element={<NewsAdmin />}/> */}
                {/* <Route exact path="/testimonios/:page" element={<Testimonials />}/> */}
            </Routes>
        </div>
    )
}

export default BackofficeRoutes