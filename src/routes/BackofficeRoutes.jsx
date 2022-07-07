import { Route, Routes } from "react-router-dom"
import NewsAdmin from "../pages/Backoffice/News/NewsAdmin"

const BackofficeRoutes = () => {

    return (
      
            <Routes>
                <Route exact path="/backoffice/novedades/" element={<NewsAdmin />}/>
            </Routes>
        
    )
}

export default BackofficeRoutes