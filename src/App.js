import { useNavigate, Route, Routes, Link } from 'react-router-dom'
import Home from './pages/home/Home';
import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import AppRouter from "./router/AppRouter";
//redux
import { Provider } from "react-redux";
import store from "./store";



function App() {
<<<<<<< HEAD
  return (
    <div>
        <AppRouter/>
        <Footer />
    </div>
  );
=======
    return (
        <Provider store={store}>
            <div>
                <h1 className="fw-bolder"></h1>
                <AppRouter />

                <Footer />
            </div>
        </Provider>
    );
>>>>>>> e05615ee741c47b64200fd7027de3a4c2aca2562
}

export default App;