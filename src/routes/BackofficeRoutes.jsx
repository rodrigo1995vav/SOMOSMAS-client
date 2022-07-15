import { Route, Routes } from "react-router-dom"
import UsersList from "../components/UsersList/UsersList"
import NewsAdmin from "../pages/backOffice/News/NewsAdmin"

const BackofficeRoutes = () => {

    return (
      
            <Routes>
                <Route exact path="/news" element={<NewsAdmin />}/> 
                <Route exact path="/userslist/:page" element={<UsersList/>}/> 
            </Routes>
        
    )
}

export default BackofficeRoutes