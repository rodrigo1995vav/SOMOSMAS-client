import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import Alert from "../../services/AlertService";
import { useNavigate } from "react-router-dom";
import { register } from "../../store/slices/users";




 const SignupForm = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()


  const validate = Yup.object({
    firstName: Yup.string()
      .required("Ingrese su nombre")
      .matches(/^[aA-zZ\s]+$/, "Solo se permiten letras en este campo"),
    lastName: Yup.string()
      .required("Ingrese su apellido")
      .matches(/^[aA-zZ\s]+$/, "Solo se permiten letras en este campo "),
    email: Yup.string().email("Email no valido").required("Email requerido"),
    password: Yup.string()
      .min(6, "Su contraseña debe tener un minimo de 6 caracteres")
      .required("Ingrese una contraseña"),
      //If necessary next line of code will ensure the user types a safe password 
      //.matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/, "Must include uppercase and lowercase letters, a number and a special character.")
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "La contraseña debe ser igual")
      .required("Campo requerido"),
  });


  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={async (values, { resetForm })=> {
        const onRegister = ()=> { 
          resetForm(); 
          Alert.success({ title: 'Bienvenido!!!', message:'Recuerda completar tu perfil'}); 
          navigate('/'); 
          }
          delete values.confirmPassword
          dispatch( register( values , onRegister ) )
           
      }}
    >
      {(formik) => (
        <div className="col-10 col-md-8 col-lg-6 mx-auto">
          <h1 className="my-4 font-weight-bold .display-4 text-center">
            Eres nuevo? Registrate!
          </h1>
          <Form className="d-flex flex-column">
            <TextField
              label="Nombre"
              placeholder="Nombre"
              name="firstName"
              type="text"
            />
            <TextField
              label="Apellido"
              name="lastName"
              placeholder="Apellido"
              type="text"
            />
            <TextField
              label="Email"
              name="email"
              placeholder="Email"
              type="email"
            />
            <TextField
              label="Contraseña"
              name="password"
              placeholder="Contraseña"
              type="password"
            />
            <TextField
              label="Confirmar Contraseña"
              name="confirmPassword"
              placeholder="Confirmar Contraseña"
              type="password"
            />
            <button className="btn bg-primary mt-3 btn-reg mx-auto p-2" type="submit">
              Registrarse
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};


export default SignupForm