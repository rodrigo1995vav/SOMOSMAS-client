import React from "react";

const ReadOnlyRow = ({ user, handleEditUser, setShowDelete, setDeleteUserId }) => {
  return (
    <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.email}</td>
      <td>
        <a
          href="#"
          className="edit"
          title="Editar"
          onClick={(e) => handleEditUser(e, user)}
        >
          <i className="bi bi-pencil-square mx-2"></i>
        </a>
        <a
          href="#"
          title="Borrar"
          style={{ color: "red" }}
          onClick={(e) => {e.preventDefault();setShowDelete(true); setDeleteUserId(user)}}
        >
          <i className="bi bi-trash3-fill mx-2"></i>
        </a>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
