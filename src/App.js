// import { useNavigate, Route, Routes, Link } from 'react-router-dom'
// import Home from './pages/home/Home';
import React from "react";
// import Navbar from "./components/Navbar/Navbar";

//redux
import { Provider } from "react-redux";
import store from "./store";
// import Footer from "./components/Footer";
import AppRouter from "./router/AppRouter";

function App() {
    return (
        <Provider store={store}>
            <div>
                {/* <h1 className="fw-bolder"></h1> */}
                <AppRouter />

                {/* <Footer /> */}
            </div>
        </Provider>
    );
}

export default App;