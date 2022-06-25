import React from "react";
import Footer from "./components/Footer";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div>
      <h1 className="fw-bolder">hola</h1>
        <AppRouter/>
      <Footer />
    </div>
  );
}

export default App;
