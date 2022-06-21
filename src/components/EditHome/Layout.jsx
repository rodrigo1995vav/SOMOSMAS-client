import React from "react";
import Formulario from "./EditHome";
import EditSlides from "./EditSlides";

const Layout = () => {
  return (
    <div className="container">
      <h1 className="text-center m-5">Editar elementos pagina Home</h1>
      <div className="row">
        <div className="col-sm">
          <Formulario />
        </div>
        <div className="col-sm">
          <EditSlides slide="photo1" name="foto 1" />
          <EditSlides slide="photo2" name="foto 2"/>
          <EditSlides slide="photo3" name="foto 3" />
        </div>
      </div>
    </div>
  );
};

export default Layout;
