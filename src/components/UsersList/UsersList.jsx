import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import UserDataRow from "./UserDataRow";
import EditFormModal from "./EditFormModal";
import Paginator from "../Paginator";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Loader } from '../Loader';


function UsersList() {
  const navigate = useNavigate();
  const { page } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [totalUsers, setTotalUsers] = useState();
  const [data, setData] = useState([]);
  const [editContactId, setEditContactId] = useState(null);
  const [sortByColumn, setSortByColumn] = useState("id");
  const [sortDirection, setSortDirection] = useState("ASC");
  const [editFormData, setEditFormData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  const [show, setShow] = useState(false);
  const [loading,setLoading] = useState(true)

  const usersPerPage = 10;

  useEffect(() => {
    getData();

    setTimeout(()=>setLoading(false),1000)
  }, [page, searchTerm, sortDirection]);

  const getData = async () => {
    axios
      .get("http://localhost:3001/users", {
        params: {
          page: page,
          searchTerm: searchTerm,
          sortCol: sortByColumn,
          sortDirection: sortDirection,
        },
      })
      .then((res) => {
        console.log(res);
        setTotalUsers(res.data.total_users);
        setData(res.data.users);
      })
      .catch(function (error) {
        setData([]);
        console.log(error.response.data.message);
      });
  };

  const handleEditUser = (e, user) => {
    e.preventDefault();
    setEditContactId(user.id);

    const formValues = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    };
    console.log(formValues);

    setEditFormData(formValues);
    console.log(editFormData);
  };

  const handleEditFormSubmit = (values) => {
    //TODO axios Patch USER!
    console.log(values);
    const editedUser = {
      id: values.id,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
    };

    const newUsers = [...data];

    const index = data.findIndex((user) => user.id === editContactId);

    newUsers[index] = editedUser;
    //TODO axios get users
    setData(newUsers);

    setEditContactId(null);
    setShow(false);
  };

  const handleDelete = (id) => {
    //TODO axios DELETE USER
    const newUsers = [...data];

    const index = data.findIndex((user) => user.id === id);

    newUsers.splice(index, 1);
    //TODO axios get user

    setData(newUsers);
  };

  const sortUsers = (col) => {
    setSortByColumn(col);
    if (sortDirection === "ASC") {
      return setSortDirection("DESC");
    } else {return setSortDirection("ASC")}
  };

  const displayUsers = data.map((user) => (
    <UserDataRow
      user={user}
      handleEditUser={handleEditUser}
      handleDelete={handleDelete}
      setShow={setShow}
      editFormData={editFormData}
    />
  ));

  const searchUserByEmail = (e) => {
    const search = e.target.value;
    setSearchTerm(search);
  };
  const pageCount = Math.ceil(totalUsers / usersPerPage);

  if(loading){
    return   <main className='container-fluid h-100 p-0 d-flex justify-content-center align-items-center bg-white '>
              <Loader></Loader> 
             </main>
}

  return (
    <div className="container ">
      {show && (
        <EditFormModal
          editFormData={editFormData}
          setShow={setShow}
          handleEditFormSubmit={handleEditFormSubmit}
        />
      )}
      <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
        <div className="row ">
          <div className="col-sm mt-5 mb-4 text-gred">
            <div className="search">
              <form className="form-inline">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Buscar por email"
                  aria-label="Search"
                  onChange={(e) => {
                    navigate("/backoffice/userslist/1", { replace: true });
                    searchUserByEmail(e);
                  }}
                />
              </form>
            </div>
          </div>
          <div className="col-sm-6  mt-5 mb-4" style={{ color: "black" }}>
            <h2 className="text-center">
              <b>Detalle de Ususarios</b>
            </h2>
          </div>
          <div className="col-sm d-flex justify-content-center align-items-center ">
            <i className="bi bi-people-fill display-3 mx-2"></i>
            <i className="bi bi-gear-fill display-3 mx-2"></i>
          </div>
        </div>
        <div className="row">
          <div className="table-responsive ">
            <table className="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th onClick={() => sortUsers("id")}>
                    <div
                      className="d-flex justify-content-center"
                      role="button"
                    >
                      ID
                      {sortDirection === "ASC" ? (
                        <i className="bi bi-sort-numeric-down mx-2"></i>
                      ) : (
                        <i className="bi bi-sort-numeric-up mx-2"></i>
                      )}
                    </div>
                  </th>
                  <th onClick={() => sortUsers("firstName")}>
                    <div
                      className="d-flex justify-content-center"
                      role="button"
                    >
                      Nombre
                      {sortDirection === "ASC" ? (
                        <i className="bi bi-sort-alpha-down mx-2"></i>
                      ) : (
                        <i className="bi bi-sort-alpha-up-alt mx-2"></i>
                      )}
                    </div>
                  </th>
                  <th onClick={() => sortUsers("lastName")}>
                    <div
                      className="d-flex justify-content-center"
                      role="button"
                    >
                      Apellido
                      {sortDirection === "ASC" ? (
                        <i className="bi bi-sort-alpha-down mx-2"></i>
                      ) : (
                        <i className="bi bi-sort-alpha-up-alt mx-2"></i>
                      )}
                    </div>
                  </th>
                  <th onClick={() => sortUsers("roleId")}>
                    <div
                      className="d-flex justify-content-center"
                      role="button"
                    >
                      RoleId
                      {sortDirection === "ASC" ? (
                        <i className="bi bi-sort-numeric-down mx-2"></i>
                      ) : (
                        <i className="bi bi-sort-numeric-up mx-2"></i>
                      )}
                    </div>
                  </th>
                  <th onClick={() => sortUsers("email")}>
                    <div
                      className="d-flex justify-content-center"
                      role="button"
                    >
                      Email
                      {sortDirection === "ASC" ? (
                        <i className="bi bi-sort-alpha-down mx-2"></i>
                      ) : (
                        <i className="bi bi-sort-alpha-up-alt mx-2"></i>
                      )}
                    </div>
                  </th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>{data[0] && displayUsers}</tbody>
            </table>
            {!data[0] && (
              <h1 className="text-center m-4">No hay usuarios existentes</h1>
            )}
          </div>
        </div>
        <Paginator pageCount={pageCount} currentPage={page} />
      </div>
    </div>
  );
}

export default UsersList;
