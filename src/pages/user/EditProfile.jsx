import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { CustomTextInput } from "../../components/TextInput";
import Alert from "../../services/AlertService";

const EditProfile = ({ editFormData, setShow, handleEditFormSubmit, saveFile }) => {
  console.log(editFormData);
  const modelStyle = {
    backgroundColor: "rgba(0,0,0,0.3)",
    "font-size": "100%",
  };

  const validate = Yup.object({
    firstName: Yup.string()
      .min(2, "Debe tener al menos 2 caracteres")
      .required("Campo requerido"),
    lastName: Yup.string()
      .min(2, "Debe tener al menos 2 caracteres")
      .required("Campo requerido"),
    email: Yup.string()
      .email("Direccion de email invalida")
      .required("Campo requerido"),
  });

  return (
    <>
      <div className="modal show fade d-block" style={modelStyle}>
        <div
          className="modal-dialog modal-dialog-centered"
          role="document"
          style={{ width: "350px" }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title" style={{ "font-size": "100%" }}>
                Modificar datos de tu perfil
              </h3>
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
                onSubmit={(user) => {
                  Alert.confirmRequest(
                    {
                      title: `Seguro deseas modificar la informacion del usuario ${user.firstName} ${user.lastName}?`,
                    },
                    () => {
                      handleEditFormSubmit(user);
                      Alert.success({ title: "El usuario ha sido modificado" });
                    }
                  );
                }}
              >
                {(formik) => (
                  <Form>
                    <CustomTextInput
                      style={{ "font-size": "100%" }}
                      className="form-control form-control-lg text-center"
                      placeholder="Nuevo Nombre..."
                      name="firstName"
                    />
                    <CustomTextInput
                      style={{ "font-size": "100%" }}
                      className=" form-control form-control-lg text-center"
                      placeholder="Nuevo Apellido..."
                      name="lastName"
                    />
                    <CustomTextInput
                      style={{ "font-size": "100%" }}
                      className=" form-control form-control-lg text-center"
                      placeholder="Nuevo Email..."
                      name="email"
                    />
                    <input type="file" name="image" onChange={(e) => saveFile(e)} />
                    <div className="modal-footer">
                      <button
                        type="submit"
                        className="btn btn-light text-white fs-3"
                        style={{ borderRadius:'.9rem' }}
                      >
                        Guardar
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary text-white fs-3"
                        style={{ borderRadius:'.9rem' }}
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

export default EditProfile;