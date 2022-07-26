import Alert from "../../../services/AlertService";
import { deletePrivate } from "../../../services/apiServices";

const TestimonialsListItem = ({ testimonial }) => {
  const deleteTestimonial = (testimonial) => {
    Alert.confirmRequest(
      { title: `¿Desea eliminar a ${testimonial.name}?` },
      () => deletePrivate(`/testimonials/${testimonial.id}`),
      () => Alert.success({ title: "Testimonio eliminado" })
    );
  };

  return (
    <li className=" list-group-item list-group-item-action p-4  d-flex justify-content-between align-items-center">
      <div className="ms-2 me-auto">
        <div className="fw-bold align-content-center fs-4">
          {testimonial.name}
        </div>
      </div>
      <div className="d-flex d-flex justify-content-center ">
        <button
          onClick={() => console.log("Open form")}
          className="btn btn-light text-white mx-1 display-1 "
        >
          <i class="bi bi-pencil-fill h3"></i>
          Editar
        </button>
        <button
          onClick={() => deleteTestimonial(testimonial)}
          className="btn btn-primary text-white mx-1 display-1"
        >
          <i class="bi bi-trash3 h3"></i>
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default TestimonialsListItem;
