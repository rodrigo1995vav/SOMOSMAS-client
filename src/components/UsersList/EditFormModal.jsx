import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const EditFormModal = ({ editFormData, setShow, handleEditFormSubmit }) => {
  const modelStyle = {
    backgroundColor: "rgba(0,0,0,0.3)",
  };

  const validate = Yup.object({
    firstName: Yup.string()
      .min(2, "Debe tener al menos 2 caracteres")
      .required("Campo requerido"),
    lastName: Yup.string()
      .min(2, "Debe tener al menos 2 caracteres")
      .required("Campo requerido"),
    email: Yup.string().email("Direccion de email invalida").required("Campo requerido"),
  });

  return (
    <>
      <div className="modal show fade d-block" style={modelStyle}>
        <div className="modal-dialog modal-dialog-centered" role="document" style={{width: "300px"}}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Modificar datos de usuario
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => {
                  setShow(false);
                }}
              ></button>
            </div>
            <div className="modal-body">
              <Formik
                initialValues={{
                  id: editFormData.id,
                  firstName: editFormData.firstName,
                  lastName: editFormData.lastName,
                  email: editFormData.email,
                }}
                validationSchema={validate}
                onSubmit={(values) => {
                  console.log("Formulario enviado");
                  console.log(values);
                  handleEditFormSubmit(values)
                }}
              >
                {(formik) => (
                  <Form >
                    <div className="mb-4">
                      <Field
                        className="form-control form-control-lg text-center"
                        type="text"
                        placeholder="Nuevo Nombre..."
                        name="firstName"
                      />
                        <ErrorMessage
                      component="div"
                      name="firstName"
                      className="error"
                    />
                    </div>
                  
                    <div className="mb-4">
                      <Field
                        className=" form-control form-control-lg text-center"
                        type="text"
                        placeholder="Nuevo Apellido..."
                        name="lastName"
                      /><ErrorMessage
                      component="div"
                      name="lastName"
                      className="error"
                    />
                    </div>
                    <div className="mb-4">
                      <Field
                        className=" form-control form-control-lg text-center"
                        name="email"
                        placeholder="Nuevo Email..."
                      />
                       <ErrorMessage
                      component="div"
                      name="email"
                      className="error"
                    />
                    </div>
                    <div className="modal-footer">
                      <button type="submit" className="btn btn-primary">
                        Guardar
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => setShow(false)}
                      >
                        Cancelar
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditFormModal;
