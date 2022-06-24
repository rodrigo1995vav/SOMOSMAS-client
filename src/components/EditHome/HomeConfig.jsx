import React from "react";
import EditHome from "./EditHome";
import EditSlides from "./EditSlides";

const HomeConfig = () => {
  return (
    <div className="container">
      <h1 className="text-center m-5">Editar elementos pagina Home</h1>
      <div className="row">
        <div className="col-sm">
          <EditHome/>
        </div>
        <div className="col-sm">
          <EditSlides/>
        </div>
      </div>
    </div>
  );
};

export default HomeConfig;
