import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Alert from '../../services/AlertService';
//import { login } from '../../services/user/userServices';
import { login } from '../../store/slices/users/index'
import { TextField } from '../SignUpForm/TextField';



export const LoginForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isShowPassword, setIsShowPassword] = useState(false)

    const handleClickShowPassword = () => {
        setIsShowPassword(!isShowPassword)
    }

    return (
        <>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validate={values => {
                    let errors = {};
                    if (!values.email) {
                        errors.email = 'El correo es requerido';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Dirección de correo inválida';
                    }
                    if (!values.password) {
                        errors.password = 'La contraseña es requerido';
                    } else if (values.password.length < 3) {
                        errors.password = 'La contraseña debe tener al menos 6 caracteres';
                    }

                    return errors;
                }}
                onSubmit={async (values, { resetForm }) => {

                    const onLogin = ()=>{ 
                        resetForm(); 
                        Alert.success({ title: 'Bienvenido!!!'}); 
                        navigate('/'); 
                        }
                   
                        dispatch( login( values, onLogin ) )
                    
             
                }}
            >{({ errors }) => (
                <Form className='login-form'  >
                    <TextField 
                     label=""
                     placeholder="Email"
                     name="email"
                     type="email"/>
                
                <TextField 
                     icon={isShowPassword ? "bi bi-eye" : "bi bi-eye-slash"}
                     onClickIcon = {()=> handleClickShowPassword()}
                     label=""
                     placeholder="Contraseña"
                     name="password"
                     type={isShowPassword ? 'text' : "password"}/>
                    <button type="submit" style={ { borderRadius: '.7rem' } } 
                    className=' btn btn-primary w-100   text-white fs-2 p-3 my-4 shadow-lg '>Iniciar sesión</button>
                </Form>
            )}
            </Formik>


        </>
    )
}