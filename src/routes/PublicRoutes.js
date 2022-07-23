import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home.jsx';
import NewsDetails from '../pages/NewsDetails/NewsDetails.jsx';

import News from '../pages/news/News';
import { LoginPage } from '../pages/login/LoginPage';
import NotFound from '../pages/notfound/NotFound';
import { ContactPage } from '../pages/contact/ContactPage';
import RegisterPage from '../pages/register/RegisterPage.jsx';
import MembersList from '../pages/staff/MembersList.jsx';
import TestimonialsPage from '../pages/testimonials/TestimonialsPage.jsx';




const PublicRoutes = () => {
    return (
        <>
            <Routes>
                <Route exact match path='/' element={<Home />} />
                <Route path='novedades/:page' element={<News />} />
                <Route path='novedades/:id/novedad' element={<NewsDetails />} />
                <Route path='testimonios/:page' element={<TestimonialsPage />} />
                <Route path='contacto' element={<ContactPage />} />
                <Route path='login' element={<LoginPage />} />
                <Route path='registrarse' element={<RegisterPage />} />
                <Route path='nosotros/:page' element={<MembersList />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    );
}

export default PublicRoutes;