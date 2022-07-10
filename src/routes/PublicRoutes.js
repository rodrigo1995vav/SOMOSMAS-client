import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home.jsx';
import News from '../pages/news/News';
import Footer from '../components/Footer'
import { LoginPage } from '../pages/login/LoginPage';
import NotFound from '../pages/notfound/NotFound';
import Navbar from '../components/Navbar/Navbar.jsx';

import { ContactPage } from '../pages/contact/ContactPage';
import { NewsDetail } from '../pages/news/NewsDetail';


const PublicRoutes = () => {
    return (
        <>
            <Navbar></Navbar>
            <Routes>
                <Route exact match path='' element={<Home />} />
                <Route path='novedades' element={<News />} />
                <Route path='novedades/:id' element={<NewsDetail />} />
                <Route path='testimonios' element={<News />} />
                <Route path='contacto' element={<ContactPage />} />
                <Route path='login' element={<LoginPage />} />
                <Route path='registrarse' element={<LoginPage register={true} />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer></Footer>
        </>
    );
}

export default PublicRoutes;