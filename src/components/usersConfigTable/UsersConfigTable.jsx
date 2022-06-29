import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import ReadOnlyRow from "./ReadOnlyRow";
import { EditableRow } from "./EditableRow";
import Users from "./MOCK_DATA.json";
import ModalSaveChanges from "./ModalSaveChanges";
import ModalConfirmDelete from "./ModalConfirmDelete";
import ReactPaginate from "react-paginate";

function UsersConfigTable() {
  const [data, setData] = useState([]);
  const [mainData, setMainData] = useState([]);
  const [editContactId, setEditContactId] = useState(null);
  const [deleteUserId, setDeleteUserId] = useState(null);
  const [order, setOrder] = useState("asc");
  const [showDelete, setShowDelete] = useState(false);
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

  const handleEditFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
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

    setEditFormData(formValues);
  };

  const handleEditFormSubmit = (e) => {

    //TODO axios Patch USER!
    e.preventDefault();

    const editedUser = {
      id: editContactId,
      firstName: editFormData.firstName,
      lastName: editFormData.lastName,
      email: editFormData.email,
    };

    const newUsers = [...data];
    const newMainUsers = [...mainData];

    const index = data.findIndex((user) => user.id === editContactId);

    newUsers[index] = editedUser;
    newMainUsers[editContactId-1] = editedUser;
    //TODO axios get users
    setData(newUsers);
    setMainData(newMainUsers);
    setEditContactId(null);
    setShow(false);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (id) => {
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
    setShowDelete(false);
  };

  const sort = (col) => {
    if (order === "asc" && col !== "id") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("dsc");
    }
    if (order === "asc" && col === "id") {
      const sorted = [...data].sort((a, b) => (a[col] > b[col] ? 1 : -1));
      setData(sorted);
      setOrder("dsc");
    }
    if (order === "dsc" && col !== "id") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("asc");
    }
    if (order === "dsc" && col === "id") {
      const sorted = [...data].sort((a, b) => (a[col] < b[col] ? 1 : -1));
      setData(sorted);
      setOrder("asc");
    }
  };

  const displayUsers = data
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => (
      <>
        {editContactId === user.id ? (
          <EditableRow
            editFormData={editFormData}
            handleEditFormChange={handleEditFormChange}
            handleCancelClick={handleCancelClick}
            setShow={setShow}
          />
        ) : (
          <ReadOnlyRow
            user={user}
            handleEditUser={handleEditUser}
            handleDeleteClick={handleDeleteClick}
            setShow={setShow}
            setShowDelete={setShowDelete}
            setDeleteUserId={setDeleteUserId}
          />
        )}
      </>
    ));

  const filter = (e) => {
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
      {showDelete && (
        <ModalConfirmDelete
          setShowDelete={setShowDelete}
          handleDeleteClick={handleDeleteClick}
          deleteUserId={deleteUserId}
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
                  placeholder="Buscar email"
                  aria-label="Search"
                  onChange={(e) => {
                    filter(e);
                    setPageNumber(0);
                  }}
                />
              </form>
            </div>
          </div>
          <div className="col-sm-6  mt-5 mb-4" style={{ color: "green" }}>
            <h2>
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
            <form onSubmit={handleEditFormSubmit}>
              <table className="table table-striped table-hover table-bordered">
                <thead>
                  <tr>
                    <th onClick={() => sort("id")}>
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
                    <th onClick={() => sort("firstName")}>
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
                    <th onClick={() => sort("lastName")}>
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
                    <th onClick={() => sort("email")}>
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
              {show && <ModalSaveChanges setShow={setShow} />}
            </form>
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

export default UsersConfigTable;
