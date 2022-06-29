import React from 'react'

const ModalConfirmDelete = ({setShowDelete, handleDeleteClick, deleteUserId}) => {
    const modelStyle = {
        display: "flex",
        position:"fixed",
        backgroundColor: "rgba(0,0,0,0.3)",
      };
  return (
    <div className="modal show fade" style={modelStyle}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" >
              Borrar usuario
            </h5>
            <button type="button" className="btn-close" onClick={()=> {setShowDelete(false)}}></button>
          </div>
          <div className="modal-body">
            ¿Está seguro que desea eliminar al usuario {deleteUserId.firstName} {deleteUserId.lastName} ?
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={()=>handleDeleteClick(deleteUserId.id) }>
              Borrar
            </button>
            <button type="button" className="btn btn-secondary" onClick={()=> {setShowDelete(false)}}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalConfirmDelete