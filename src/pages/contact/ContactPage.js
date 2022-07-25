import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useEffect } from "react";
import { contactUs } from '../../store/slices/contact/index';
import { useDispatch, useSelector } from "react-redux";

import { CustomTextArea } from '../../components/TextArea';
import { CustomTextInput } from '../../components/TextInput';
import Alert from '../../services/AlertService';
import { postPublic } from '../../services/apiServices';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../../components/Loader';


export const ContactPage = () => {
    const dispatch = useDispatch()
    const { responseContact, loading, error } = useSelector(state => state.contact)

    const navigate = useNavigate()

    // It returns the validation schema object used by Formik
    const yupValidationSchema = () => ({
        name: Yup.string()
            .min(3, 'Debe tener al menos 3 caracteres')
            .required('Requerido'),
        email: Yup.string()
            .email('El E-mail no tiene un formato válido')
            .required('Requerido'),
        message: Yup.string()
            .min(5, 'Debe tener al menos 5 caracteres')
            .required('Requerido')
    })

    return (
        <main className="layout_324af">

            <div>
                <p className="fs-1">¿Querés contribuir?</p>
                <button
                    type="button"
                    className="btn btn-primary text-white fs-3 mt-1 px-4"
                    style={{ borderRadius: "6px" }}
                >
                    Contribuir
                </button>
                <p className="fs-1 mt-5">¡Contactate con nosotros!</p>
            </div>

            <div style={{ flexBasis: '50%' }} >
                <div>
         
                </div>
                <Formik
                    initialValues={{ name: '', email: '', message: '' }}
                    onSubmit={(values,  {resetForm }) => {

                        const onSuccess = ()=>{Alert.success({ title: 'Consulta enviada', message: 'Gracias por contactarte con nosotros' });
                                                resetForm()}
                        
                        dispatch(contactUs(values,()=>onSuccess ))
                    
                     
                    }}
                    validationSchema={Yup.object(yupValidationSchema())}
                >
                    {
                        () => (
                            <Form>
                                <CustomTextInput
                                    placeholder="Nombre y Apellido"
                                    name="name"
                                    className="text-input_324af"
                                />

                                <CustomTextInput
                                    placeholder="Email"
                                    name="email"
                                    className="text-input_324af"
                                />

                                <CustomTextArea
                                    placeholder="Mensaje"
                                    name="message"
                                    className="text-area_324af"
                                />

                                <button
                                    type="submit"
                                    className="btn btn-light py-2 px-4 mt-4 text-white fs-3 d-inline-block"
                                    style={{ borderRadius: '6px' }}
                                >
                                    Contactarse
                                </button>
                            </Form>
                        )
                    }
                </Formik>


                <button
                    className='btn mt-3 fs-3 px-3'
                    style={{ border: '1px solid black', borderRadius: '6px' }}
                    onClick={() => { navigate('/') }}
                >
                    Ir al inicio
                </button>

            </div>
        </main>

    )
}
