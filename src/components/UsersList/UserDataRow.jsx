import React from "react";
import Alert from "../../services/AlertService";

const UserDataRow = ({ user, handleEditUser, setShow, handleDelete, setEditFormData }) => {

  return (
    <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.roleId}</td>
      <td>{user.email}</td>
      <td className="text-center">
        <a
          href="#"
          className="edit"
          title="Editar"
          onClick={(e) => {
            //Here we should put the userform thats being made by Israeli
            handleEditUser(e, user);
            setShow(true);
            setEditFormData(user)

          }}
        >
          <i className="bi bi-pencil-square mx-2"></i>
        </a>
        <a
          href="#"
          title="Borrar"
          style={{ color: "red" }}
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
