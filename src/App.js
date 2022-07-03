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
    return (
        <Provider store={store}>
            <div>
                <h1 className="fw-bolder"></h1>
                <AppRouter />

              {/*   <Footer /> */}
            </div>
        </Provider>
    );
}

export default App;