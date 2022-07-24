import React from "react";
import Alert from "../../services/AlertService";

const UserDataRow = ({
  user,
  handleEditUser,
  setShow,
  handleDelete,
  setEditFormData,
}) => {
  return (
    <tr key={user.id}>
      <td className="text-center">{user.id}</td>
      <td className="text-center">{user.firstName}</td>
      <td className="text-center">{user.lastName}</td>
      <td className="text-center">{user.roleId}</td>
      <td className="text-center">{user.email}</td>
      <td className="text-center">
        <div className="d-flex d-flex justify-content-center ">
          <button
            onClick={(e) => {
              handleEditUser(e, user);
              setShow(true);
              setEditFormData(user);
            }}
            className="btn btn-light text-white mx-1 display-1 "
          >
            <i class="bi bi-pencil-fill h3"></i>
            Editar
          </button>
          <button
             onClick={(e) => {
              e.preventDefault();
              Alert.confirmRequest(
                {
                  title: `Seguro deseas eliminar al usuario ${user.firstName} ${user.lastName}?`,
                },
                () => {
                  handleDelete(user.id);
                  Alert.success({ title: "El usuario ha sido eliminada" });
                }
              );
            }}
            className="btn btn-primary text-white mx-1 display-1"
          >
            <i class="bi bi-trash3 h3"></i>
            Eliminar
          </button>
        </div>
      </td>
    </tr>
  );
};

export default UserDataRow;
