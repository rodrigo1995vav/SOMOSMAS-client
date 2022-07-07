import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import News from '../pages/news/News';
import { LoginPage } from '../pages/login/LoginPage';
import NotFound from '../pages/notfound/NotFound';
import Activities from '../pages/activities/Activities';
import ContactPage from '../pages/contact/ContactPage';
import { NewsDetail } from '../pages/news/NewsDetail';

const PublicRoutes = () => {
    return (
        <Routes>
            <Route exact match path='' element={<Home/>} />
            <Route path='news' element={<News/>} />
            <Route path='news/:id' element={<NewsDetail/>} />
            <Route path='testimonials' element={<News/>} />
          {/*   <Route path='contact' element={<ContactPage/>} /> */}
          {/*    <Route path='login' element={<LoginPage/>} /> */}
           
            <Route path='*' element={<NotFound/>} />

            <Route path='activities/'>
                <Route path=':id' element={<Activities/>} />
                <Route path='' element={<Activities/>} />
            </Route>
        </Routes>
    );
}

export default PublicRoutes;