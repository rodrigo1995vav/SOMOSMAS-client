import { Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

const EditSlides = ({ slide, name }) => {
  const validate = Yup.object({
    text: Yup.string().min(
      15,
      "El pie de foto debe contener un minimo de 15 caracteres"
    ),
    photo1: Yup.mixed()
      .required("Ingresa un archivo de imagen")
      .test("type", "Solo se aceptan los siguientes formatos: .jpeg, .jpg, .bmp, .pdf and .doc", (value) => {
        return value && (
            value.type === "image/jpeg" ||
            value.type === "image/jpg" ||
            value.type === "image/bmp" ||
            value.type === "image/png" 
        )
    })
      .test("fileSize", "El archivo es muy grande", (value) => {
        return value && value.size <= 200;
      })
  });
  return (
    <div className="bg-light  rounded-3">
      <Formik
        initialValues={{ text: "", photo1: "" }}
        validationSchema={validate}
        onSubmit={(values) => {
          console.log(values.photo1.size);
          const data = new FormData();

          data.append("file", data);
          //TODO whether we use fetch or axios here we have to send the image and text to the server side
          // axios
          //   .post("url", data)
          //   .then((e) => {
          //     console.log("Success");
          //   })
          //   .catch((e) => {
          //     console.error("Error", e);
          //   });
        }}
      >
        {(props) => (
          <div className="m-2">
            <Form className="d-flex flex-column">
              <h2 className="my-4 font-weight-bold .display-4 text-center ">
                Actualizar información {name}
              </h2>
              <label htmlFor="text" className="ms-3">
                Ingrese el nuevo pie de foto
              </label>
              <input
                className="m-2"
                type="text"
                name="text"
                onChange={(e) => props.setFieldValue("text", e.target.value)}
              />
              <ErrorMessage component="div" name="text" className="error" />
              <label htmlFor={slide} className="ms-3 mt-3">
                Ingrese la nueva foto
              </label>
              <input
                className="m-2"
                type="file"
                name={slide}
                onChange={(e) => props.setFieldValue(slide, e.target.files[0])}
              />
              <ErrorMessage component="div" name="photo1" className="error" />
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
