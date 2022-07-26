import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
import { useSelector } from 'react-redux';

import { ErrorMessage, Field, Form, Formik } from 'formik';

export default function UpdateUser() {

    // const dispatch = useDispatch()

    const state = useSelector( state => state.user );

    const [user, setUser] = useState('')

    useEffect(() => {
      if (state){
        switch (state){
            case 'admin':
                setUser('admin')
                break
            case 'user':
                setUser('user')
                break
            default:
                break
        }
      }
    
    }, [state])
    
    return (
        <>
            <Formik
                initialValues={{
                    firtName: '',
                    lastName: '',
                    email: '',
                    password:'',
                    image:'',
                    roleid:0
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
                        errors.password = 'El password es requerido';
                    } else if (values.password.length < 6) {
                        errors.password = 'El password debe tener al menos 6 caracteres';
                    }
    
                    return errors;
                }}
                onSubmit={(values,{resetForm})=>{
    
                    // dispatch(updateUserReducer(values))
                }}
            >{({errors}) => (
                <Form className='form' >
                    {
                        user==='admin'
                        ? <h1>Editar perfil de usuario</h1>
                        : <h1>Editar mi perfil</h1>
                    }
                    <div className='separator'/>


                    <div className='form-floating mb-3'>                
                        <Field
                            placeholder="tucorreo@mail.com"
                            className='form-control'
                            name='firstName'
                            type="text"
                        />
                        <label htmlFor="firstName">Nombre: </label>
                        <ErrorMessage name='firstName' component={ ()=>
                            <div className='error'>{errors.firstName}</div>
                        } className='error-message' />
                    </div>
                    <div className='form-floating mb-3'>                
                        <Field
                            placeholder="tucorreo@mail.com"
                            className='form-control'
                            name='lasttName'
                            type="text"
                        />
                        <label htmlFor="lasttName">Apellido</label>
                        <ErrorMessage name='lasttName' component={ ()=>
                            <div className='error'>{errors.lasttName}</div>
                        } className='error-message' />
                    </div>
                    <div className='form-floating mb-3'>                
                        <Field
                            placeholder="tucorreo@mail.com"
                            className='form-control'
                            name='email'
                            type="email"
                        />
                        <label htmlFor="email">Correo Electrónico</label>
                        <ErrorMessage name='email' component={ ()=>
                            <div className='error'>{errors.email}</div>
                        } className='error-message' />
                    </div>
                    <div className='form-floating mb-3'>
                        {/* <p className='show-password' onClick={() => handleClickShowPassword()}>Mostrar</p> */}
                        <Field
                            id="password"
                            name='password'
                            className='form-control floatingPassword'
                            // type={isShowPassword ? 'text': "password"}
                        />
                        <label htmlFor="password">Contraseña</label>
                        <ErrorMessage name="password" component={ ()=>
                            <div className='error'>{errors.password}</div>
                        } className='error' />
                    </div>
                    {
                        user==='admin'
                        && (
                             <div className='form-floating mb-3'>
                                <Field
                                    id="rol"
                                    name='rol'
                                    className='form-control floatingPassword'
                                    // type={isShowPassword ? 'text': "password"}
                                />
                                <label htmlFor="rol">Rol</label>
                                <ErrorMessage name="rol" component={ ()=>
                                    <div className='error'>{errors.rol}</div>
                                } className='error' />
                            </div>
                        )
                    }
                    <button type="submit" className='buttonColor '>Moficar información</button>
                </Form>
            )}
            </Formik>
                        
                        
        </>
      )
}
