import { Route, Routes } from "react-router-dom"
import NewsAdmin from "../pages/Backoffice/News/NewsAdmin"
import {ActivitiesForm} from '../pages/activities/ActivitiesForm.jsx';

const BackofficeRoutes = () => {

    return (
      
            <Routes>
                <Route exact path="/news" element={<NewsAdmin />}/> 
                <Route path='activities/'>
                    <Route path=':id' element={<ActivitiesForm patch={true}/>} />
                    <Route path='' element={<ActivitiesForm patch={false}/>} />
                </Route>
            </Routes>
        
    )
}

export default BackofficeRoutes