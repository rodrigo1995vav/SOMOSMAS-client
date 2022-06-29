import React from "react";

const ModalSaveChanges = ({setShow}) => {
  const modelStyle = {

    backgroundColor: "rgba(0,0,0,0.3)",
  };
  return (
    <div className="modal show fade d-block" style={modelStyle}>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              Guardar Cambios
            </h5>
            <button type="button" className="btn-close" onClick={()=> {setShow(false)}}></button>
          </div>
          <div className="modal-body">
            ¿Está seguro que desea modificar los datos del usuario?
          </div>
          <div className="modal-footer">
            <button type="submit" className="btn btn-primary">
              Guardar
            </button>
            <button type="button" className="btn btn-secondary" onClick={()=> setShow(false)}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalSaveChanges;
