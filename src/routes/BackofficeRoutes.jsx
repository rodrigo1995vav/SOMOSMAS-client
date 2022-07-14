import { Route, Routes } from "react-router-dom"
import ActivitiesList from "../pages/Backoffice/activities/ActivitiesList"
import NewsAdmin from "../pages/Backoffice/News/NewsAdmin"
import UsersList from "../components/UsersList/UsersList"


const BackofficeRoutes = () => {

    return (

        <Routes>
            <Route exact path="/news" element={<NewsAdmin />} />

            <Route path="/actividades/:page" element={<ActivitiesList />} />
       
            <Route exact path="/userslist/:page" element={<UsersList/>}/> 
            </Routes>
        
    )
}

export default BackofficeRoutes