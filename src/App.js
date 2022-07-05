import React from "react";
import Footer from "./components/Footer";
import AppRouter from "./router/AppRouter";
import EditOrganization from "./pages/backOffice/EditOrganization";

function App() {
  return (
    <div>
      <h1 className="fw-bolder"></h1>
        <AppRouter/>
        <Footer />
      <EditOrganization/>
    </div>
  );
}

export default App;
