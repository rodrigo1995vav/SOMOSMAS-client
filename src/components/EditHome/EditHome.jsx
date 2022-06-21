import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Formulario = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  const validate = Yup.object({
    text: Yup.string().min(15, "Must be 15 characters or less"),
  });

  return (
    <>
      <Formik
        initialValues={{
          text: "",
        }}
        validationSchema={validate}
        onSubmit={(values, { resetForm }) => {
          resetForm();
          console.log("Formulario enviado");
          cambiarFormularioEnviado(true);
          setTimeout(() => cambiarFormularioEnviado(false), 5000);
        }}
      >
        {(formik) => (
          <div>
			<h3>Modificar texto de bienvenida</h3>
            <Form className="formulario">
              <div>
                <Field className="form-control form-control-lg" rows="10" name="text" as="textarea" placeholder="Texto bienvenida" />
              </div>
              <ErrorMessage component="div" name="text" className="error" />

              <button  type="submit" className="btn btn-dark mt-3 mb-3 btn-reg mx-auto">Modificar</button>
              {formularioEnviado && (
                <p className="exito">Formulario enviado con exito!</p>
              )}
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};

export default Formulario;
