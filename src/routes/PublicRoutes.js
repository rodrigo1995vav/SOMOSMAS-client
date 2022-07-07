import { Route, Routes } from 'react-router-dom';
import NewsDetails from '../components/NewsDetails/NewsDetails.jsx';
import NewsAdmin from '../pages/Backoffice/News/NewsAdmin';
import Home from '../pages/home/Home';
import News from '../pages/news/News';
//import Login, { LoginPage } from '../pages/login/LoginPage';
import NotFound from '../pages/notfound/NotFound';




const PublicRoutes = () => {
    return (
        <Routes>
            <Route exact match path='' element={<Home/>} />
            <Route path='/2' element={<NewsAdmin/>} />
            <Route path='novedades' element={<News/>} />
            <Route path='novedades/:id' element={<NewsDetails imgHeight="50rem"/>} />  
            <Route path='testimonials' element={<News/>} />
          {/*   <Route path='contact' element={<ContactPage/>} /> */}
          {/*    <Route path='login' element={<LoginPage/>} /> */}
           
            <Route path='*' element={<NotFound/>} />
        </Routes>
    );
}

export default PublicRoutes;