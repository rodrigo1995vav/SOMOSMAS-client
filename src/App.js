import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import AppRouter from "./router/AppRouter";

function App() {
    return (
        <div>
            <Navbar />
            <h1 className="fw-bolder"></h1>
            <AppRouter />
            <Footer />
        </div>
    );
}

export default App;
