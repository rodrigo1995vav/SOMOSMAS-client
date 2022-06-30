import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import { create } from "../../services/user/userServices";
import Alert from "../../services/AlertService";
import { Navigate } from "react-router-dom";

export const Signup = () => {
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
      onSubmit={async(values) => {
        try{
          const user=await create(values)
         
          console.log('user',user)
          if (user.status===200) {
            Alert.success({title:'Welcome!!!',message:'User created successfully'})
            setTimeout(() =>{
              return <Navigate to='/login' />
            }, 2000)

          } else if(user.error){
            Alert.error({title:'Sorry...', message:'something went wrong, try again'})
          } else{
            Alert.error({title:'Sorry...', message:'Wrong data try again'})
            setTimeout(() =>{
              return <Navigate to='/' />
            }, 2000)
          }

        } catch(e) {
          console.log("Error: " + e.message);
          Alert.error({title:'Sorry...', message:'Wrong data try again'})
          setTimeout(() =>{
            return <Navigate to='/' />
          }, 2000)
        }
        //TODO navigate to Login page 
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
