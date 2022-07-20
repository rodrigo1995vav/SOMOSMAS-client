import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const EditFormModal = ({ editFormData, setShow, handleEditFormSubmit }) => {
  console.log(editFormData)
  const modelStyle = {
    backgroundColor: "rgba(0,0,0,0.3)",
    'font-size':"100%"
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
        <div className="modal-dialog modal-dialog-centered" role="document" style={{width: "350px"}}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle" style={{'font-size':"100%"}}>
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
                  roleId: editFormData.roleId
                }}
                validationSchema={validate}
                onSubmit={(values) => {
                  console.log("Formulario enviado");
                  console.log(values);
                  handleEditFormSubmit(values)
                }}
              >
                {(formik) => (
                  <Form>
                    <div className="mb-4">
                      <Field
                      style={{'font-size':"100%"}}
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
                      style={{'font-size':"100%"}}
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
                      style={{'font-size':"100%"}}
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
                      <button type="submit" className="btn btn-primary" style={{'font-size':"100%"}}>
                        Guardar
                      </button>
                      <button
                        type="button"
                        style={{'font-size':"100%"}}
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
