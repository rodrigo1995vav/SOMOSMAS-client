import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import UserDataRow from "./UserDataRow";
import Users from "./MOCK_DATA.json";
import ReactPaginate from "react-paginate";
import EditFormModal from "./EditFormModal";

function UsersList() {
  const [data, setData] = useState([]);
  const [mainData, setMainData] = useState([]);
  const [editContactId, setEditContactId] = useState(null);
  const [deleteUserId, setDeleteUserId] = useState(null);
  const [order, setOrder] = useState("dsc");
  const [editFormData, setEditFormData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  const [show, setShow] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 10;

  const pagesVisited = pageNumber * usersPerPage;

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setMainData(Users);
    setData(Users);
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
    const newMainUsers = [...mainData];

    const index = data.findIndex((user) => user.id === editContactId);

    newUsers[index] = editedUser;
    newMainUsers[editContactId - 1] = editedUser;
    //TODO axios get users
    setData(newUsers);
    setMainData(newMainUsers);
    setEditContactId(null);
    setShow(false);
  };

  const handleDelete = (id) => {
    //TODO axios DELETE USER
    const newUsers = [...data];
    const newMainUsers = [...mainData];

    const index = data.findIndex((user) => user.id === id);

    newUsers.splice(index, 1);
    newMainUsers.splice(index, 1);
    //TODO axios get users

    setData(newUsers);
    setMainData(newMainUsers);
    setDeleteUserId(null);
  };

  const sortUsers = (col) => {
    const typeOfColumn = typeof(data[0][col])
    if (typeOfColumn !== "number") {
      if (order === "asc") {
        const sorted = [...data].sort((a, b) =>
          a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
        );
        setData(sorted);
        setOrder("dsc");
      } else {
        const sorted = [...data].sort((a, b) =>
          a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
        );
        setData(sorted);
        setOrder("asc");
      }
    } else {
      if (order === "asc") {
        const sorted = [...data].sort((a, b) => (a[col] > b[col] ? 1 : -1));
        setData(sorted);
        setOrder("dsc");
      } else {
        const sorted = [...data].sort((a, b) => (a[col] < b[col] ? 1 : -1));
        setData(sorted);
        setOrder("asc");
      }
    }
  };

  const displayUsers = data
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => (
      <UserDataRow
        user={user}
        handleEditUser={handleEditUser}
        handleDelete={handleDelete}
        setShow={setShow}
        editFormData={editFormData}
        setDeleteUserId={setDeleteUserId}
      />
    ));

  const searchUserByEmail = (e) => {
    const search = e.target.value;
    const actData = mainData.filter((user) => {
      if (search === "") {
        return user;
      } else if (user.email.toLowerCase().includes(search.toLowerCase())) {
        return user;
      }
    });
    setData(actData);
  };
  const pageCount = Math.ceil(data.length / usersPerPage);

  const changePage = (e) => {
    setPageNumber(e.selected);
  };

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
                    searchUserByEmail(e);
                    setPageNumber(0);
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
                      {order === "dsc" ? (
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
                      {order === "dsc" ? (
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
                      {order === "dsc" ? (
                        <i className="bi bi-sort-alpha-down mx-2"></i>
                      ) : (
                        <i className="bi bi-sort-alpha-up-alt mx-2"></i>
                      )}
                    </div>
                  </th>
                  <th onClick={() => sortUsers("email")}>
                    <div
                      className="d-flex justify-content-center"
                      role="button"
                    >
                      Email
                      {order === "dsc" ? (
                        <i className="bi bi-sort-alpha-down mx-2"></i>
                      ) : (
                        <i className="bi bi-sort-alpha-up-alt mx-2"></i>
                      )}
                    </div>
                  </th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>{displayUsers}</tbody>
            </table>
          </div>
        </div>
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"d-flex justify-content-center list-unstyled"}
          previousLinkClassName={"btn btn-primary m-1 btn-sm p-1"}
          nextLinkClassName={"btn btn-primary m-1 btn-sm p-1"}
          pageLinkClassName={"btn btn-primary m-1 btn-sm"}
          activeLinkClassName={"bg-secondary btn-sm "}
          disabledClassName={""}
          activeClassName={""}
          pageRangeDisplayed={1}
          forcePage={pageNumber === 0 ? 0 : pageNumber}
        />
      </div>
    </div>
  );
}

export default UsersList;
