import { Route, Routes } from "react-router-dom"
import NewsAdmin from "../pages/Backoffice/News/NewsAdmin"
import {ActivitiesForm} from '../pages/activities/ActivitiesForm.jsx';
import UsersList from "../components/UsersList/UsersList";

const BackofficeRoutes = () => {

    return (
      
            <Routes>
                <Route exact path="/news" element={<NewsAdmin/>}/> 
                <Route path='activities/'>
                    <Route path=':id' element={<ActivitiesForm update={true}/>} />
                    <Route path='' element={<ActivitiesForm update={false}/>} />
                </Route>
                <Route exact path="/userslist/:page" element={<UsersList/>}/> 
            </Routes>
        
    )
}

export default BackofficeRoutes