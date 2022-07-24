export default function RowsCategory({
  category,
  handlerDeleteCategory,
  setInitiateForm,
}) {
  const handleOpenForm = () => {
    setInitiateForm(({ opened }) => ({
      opened: !opened,
      initialValues: {
        name: category.name,
        description: category.description,
        id: category.id,
      },
    }));
  };

  //each activity is an activity object with name and id properties
  return (
    <>
      <tr>
        <td
          className="col-3  h4 "
          style={{ paddingTop: "35px", paddingLeft: "2rem" }}
        >
          {category.name}
        </td>
        <td
          className="col-3  h4"
          style={{ paddingTop: "35px", paddingRight: "2rem" }}
        >
          <div className="d-flex d-flex justify-content-center ">
            <button
               onClick={handleOpenForm}
              className="btn btn-light text-white mx-1 display-1 "
            >
              <i class="bi bi-pencil-fill h3"></i>
              Editar
            </button>
            <button
               onClick={() => handlerDeleteCategory(category.id, category.name)}
              className="btn btn-primary text-white mx-1 display-1"
            >
              <i class="bi bi-trash3 h3"></i>
              Eliminar
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}
