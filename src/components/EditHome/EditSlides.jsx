import { Form, Formik } from "formik";

const EditSlides = ({slide, name}) => {
  return (
      <div className="bg-light border">
        <Formik
          initialValues={{ text: "" }}
          onSubmit={(values) => {
            console.log(values);
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
            <div className="">
              <h2 className="my-4 font-weight-bold .display-4 text-center">
                Actualizar información {name}
              </h2>
              <Form className="d-flex flex-column">
                <label htmlFor="text" className="ms-3">Ingrese el nuevo pie de foto</label>
                <input
                  className="m-2"
                  type="text"
                  name="text"
                  onChange={(e) => props.setFieldValue("text", e.target.value)}
                />
                <label htmlFor={slide} className="ms-3 mt-3">Ingrese la nueva foto</label>
                <input
                className="m-2"
                  type="file"
                  name={slide}
                  onChange={(e) =>
                    props.setFieldValue(slide, e.target.files[0])
                  }
                />
                <button type="submit" className="btn btn-dark mt-3 mb-3 btn-reg mx-auto">Actualizar</button>
              </Form>
            </div>
          )}
        </Formik>
      </div>
  );
};

export default EditSlides;
