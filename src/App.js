import { useNavigate, Route, Routes, Link } from 'react-router-dom'
import Home from './pages/home/Home';
import React from "react";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <h1 className="fw-bolder">hola</h1>
      <Footer />
    </div>
  );
}

export default App;
