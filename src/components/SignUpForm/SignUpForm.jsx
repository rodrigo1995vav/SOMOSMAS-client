import React, { useState } from "react";
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

  const [ShowPassword, setShowPassword] = useState({ password:false , confirmPassword:false })

    const handleClickShowPassword = (state) => {
      console.log(state)
        setShowPassword(state)
    }


  const validate = Yup.object({
    firstName: Yup.string()
      .required("Ingrese su nombre")
      .matches(/^[aA-zZ\s]+$/, "Solo se permiten letras en este campo"),
    lastName: Yup.string()
      .required("Ingrese su apellido")
      .matches(/^[aA-zZ\s]+$/, "Solo se permiten letras en este campo "),
    email: Yup.string().email("Email no valido").required("Email requerido"),
    password: Yup.string()
      .min(8, "Su contraseña debe tener un minimo de 8 caracteres")
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
  
  
          <Form className="d-flex flex-column">
            <TextField
              label=""
              placeholder="Nombre"
              name="firstName"
              type="text"
            />
            <TextField
              label=""
              name="lastName"
              placeholder="Apellido"
              type="text"
            />
            <TextField
              label=""
              name="email"
              placeholder="Email"
              type="email"
            />
            <TextField 
              icon={ShowPassword.password ? "bi bi-eye" : "bi bi-eye-slash"}
              onClickIcon = {()=> handleClickShowPassword({...ShowPassword, password: !ShowPassword.password})}
              label=""
              placeholder="Contraseña"
              name="password"
              type={ShowPassword.password ? 'text' : "password"}/>

            <TextField 
              icon={ShowPassword.confirmPassword ? "bi bi-eye" : "bi bi-eye-slash"}
              onClickIcon = {()=> handleClickShowPassword({...ShowPassword, confirmPassword: !ShowPassword.confirmPassword})}
              label=""
              placeholder="Confirmar contraseña"
              name="confirmPassword"
              type={ShowPassword.confirmPassword ? 'text' : "password"}/>
              <button type="submit" style={ { borderRadius: '.7rem' } } 
                      className=' btn btn-primary w-100   text-white fs-2 p-3 my-4 shadow-lg '>Registrarse</button>


          </Form>
      )}
    </Formik>
  );
};


export default SignupForm
