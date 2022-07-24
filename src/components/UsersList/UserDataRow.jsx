import React from "react";
import Alert from "../../services/AlertService";

const UserDataRow = ({ user, handleEditUser, setShow, handleDelete, setEditFormData }) => {

  return (
    <tr key={user.id}>
      <td className="text-center">{user.id}</td>
      <td className="text-center">{user.firstName}</td>
      <td className="text-center">{user.lastName}</td>
      <td className="text-center">{user.roleId}</td>
      <td className="text-center">{user.email}</td>
      <td className="text-center">
        <a
          href="#"
          title="Editar"
          onClick={(e) => {
            handleEditUser(e, user);
            setShow(true);
            setEditFormData(user)

          }}
        >
          <i className="bi bi-pencil-square mx-2 text-light "></i>
        </a>
        <a
          href="#"
          title="Borrar"
          style={{ color: "primary" }}
          onClick={(e) => {
            e.preventDefault();
            Alert.confirmRequest(
              { title: `Seguro deseas eliminar al usuario ${user.firstName} ${user.lastName}?` },
              ()=>{handleDelete(user.id); Alert.success({ title:'El usuario ha sido eliminada'}) }             
            );
          }}
        >
          <i className="bi bi-trash3-fill mx-2"></i>
        </a>
      </td>
    </tr>
  );
};

export default UserDataRow;
