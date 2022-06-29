import React from "react";

export const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
  setShow,
}) => {
  return (
    <tr key={editFormData.id}>
      <td>{editFormData.id}</td>
      <td>
        <input
          className="form-control form-control-sm text-center"
          type="text"
          required="required"
          placeholder="Nuevo Nombre..."
          name="firstName"
          value={editFormData.firstName}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          className="form-control form-control-sm text-center"
          type="text"
          required="required"
          placeholder="Nuevo Apellido..."
          name="lastName"
          value={editFormData.lastName}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          className="form-control form-control-sm text-center"
          type="email"
          required="required"
          placeholder="Nuevo Email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <a
          href="#"
          title="Modificar"
          onClick={(e) => {
            e.preventDefault();
            setShow(true);
          }}
        >
          <i className="bi bi-check-lg mx-2" style={{ color: "green" }}></i>
        </a>
        <a
          href="#"
          title="Cancelar"
          style={{ color: "red" }}
          onClick={(e) => {
            e.preventDefault();
            handleCancelClick();
          }}
        >
          <i className="bi bi-x-lg mx-2"></i>
        </a>
      </td>
    </tr>
  );
};
