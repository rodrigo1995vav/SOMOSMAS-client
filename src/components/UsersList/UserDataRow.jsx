import React from "react";
import axios from "axios";
import Alert from "../../services/AlertService";

const UserDataRow = ({ user, handleEditUser, setShow, handleDelete }) => {
  const deleteUser = (id) => {
    //TODO delete request
    //test
    
    return axios.get("http://localhost:3001/activity/list?page=1");
  };

  return (
    <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.email}</td>
      <td className="text-center">
        <a
          href="#"
          className="edit"
          title="Editar"
          onClick={(e) => {
            handleEditUser(e, user);
            setShow(true);
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
              //TODO axios delete with path and user id
              deleteUser(),
              () => {Alert.success({ title: "Usuario elimiando" });handleDelete(user.id)
              }
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
