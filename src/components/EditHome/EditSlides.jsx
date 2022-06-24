import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

const EditSlides = () => {
  const validate = Yup.object({
    text: Yup.string().min(
      15,
      "El pie de foto debe contener un minimo de 15 caracteres"
    ),
    photo: Yup.string().required("Ingresa una opción"),
    img: Yup.mixed().required("Ingresa un archivo de imagen")
    .test(
      "type",
      "Solo se aceptan los siguientes formatos: .jpeg, .jpg, .bmp, .pdf and .doc",
      (value) => {
        return (
          value &&
          (value.type === "image/jpeg" ||
            value.type === "image/jpg" ||
            value.type === "image/bmp" ||
            value.type === "image/png")
        );
      }
    )
    .test("fileSize", "El archivo es muy grande", (value) => {
      return value && value.size <= 2000000;
    }),
  });
  return (
    <div className="bg-light  rounded-3">
      <Formik
        initialValues={{ text: "", img: "", photo: "" }}
        validationSchema={validate}
        onSubmit={(values) => {
          console.log(values);
          const data = new FormData();

          data.append("file", data);
          //TODO whether we use fetch or axios here we have to send the image and text to the server side
        }}
      >
        {(props) => (
          <div className="m-2">
            <h2 className="my-4 font-weight-bold .display-4 text-center ">
              Actualizar información Slides
            </h2>
            <Form className="d-flex flex-column">
              <label htmlFor="photo" className="mt-3 ms-1">
                ¿Qué slide desea modificar?
              </label>
              <Field
                as="select"
                name="photo"
                className="mx-auto ms-1"
                onChange={(e) => props.setFieldValue("photo", e.target.value)}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Field>
              <ErrorMessage component="div" name="photo" className="error" />
              <label htmlFor="text" className="mt-3 ms-1">
                Ingrese el nuevo pie de foto
              </label>
              <input
                className="m-2"
                type="text"
                name="text"
                onChange={(e) => props.setFieldValue("text", e.target.value)}
              />
              <ErrorMessage component="div" name="text" className="error" />
              <label htmlFor="photo" className="ms-1 mt-3">
                Ingrese la nueva foto
              </label>
              <input
                className="m-2"
                type="file"
                name="img"
                onChange={(e) => props.setFieldValue("img", e.target.files[0])}
              />
              <ErrorMessage component="div" name="img" className="error" />
              <button
                type="submit"
                className="btn btn-dark mt-3 mb-3 btn-reg mx-auto"
              >
                Actualizar
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default EditSlides;
