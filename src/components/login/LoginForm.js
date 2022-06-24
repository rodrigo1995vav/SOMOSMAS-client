import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState} from 'react'

export const LoginForm = () => {

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
                    errors.password = 'El password es requiredo';
                } else if (values.password.length < 6) {
                    errors.password = 'El password debe tener al menos 6 caracteres';
                }

                return errors;
            }}
            onSubmit={(values,{resetForm})=>{

                console.log(values)
                // resetForm()
            }}
        >{({errors}) => (
            <Form className='form' >
                <div className='form-floating mb-3'>                
                    <Field
                        placeholder="tucorreo@mail.com"
                        className='form-control'
                        name='email'
                        type="email"
                    />
                    <ErrorMessage name='email' component={ ()=>
                        <div className='error'>{errors.email}</div>
                    } className='error-message' />
                </div>
                <div className='form-floating mb-3'>
                    <p className='show-password' onClick={() => handleClickShowPassword()}>Mostrar</p>
                    <Field
                        id="password"
                        name='password'
                        className='form-control floatingPassword'
                        type={isShowPassword ? 'text': "password"}
                    />
                    <label htmlFor="password">Contraseña</label>
                    <ErrorMessage name="password" component={ ()=>
                        <div className='error'>{errors.password}</div>
                    } className='error' />
                </div>
                <button type="submit" className='buttonColor'>Iniciar sesión</button>
            </Form>
        )}
        </Formik>
                    
                    
    </>
  )
}