
import { Formik, Form } from 'formik';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';
import Alert from '../../services/AlertService';
import { postPrivate, putPrivate } from '../../services/apiServices';

import { CustomTextArea } from '../TextArea';
import { CustomTextInput } from '../TextInput';


const CategoriesForm = ({ initialValues }) => {

  const { id } = useParams();

  // It returns the validation schema object used by Formik
  const yupValidationSchema = () => ({
    name:        Yup.string()
                  .min(3, 'Debe tener al menos 3 caracteres')
                  .required('Requerido'),
    description: Yup.string()
                  .min(5, 'Debe tener al menos 5 caracteres')
                  .required('Requerido')
  })

  const handleOnSubmit = async( values) => {

    let response, message;

    if( initialValues ){
      response = await putPrivate( `/categories/`, id, values );
      message  = "Categoria actualizada exitosamente"
    }else{
      response = await postPrivate('/categories', values );
      message  = "Categoria creada exitosamente"
    }

    if( response.data.categoryCreated || response.data === 1 ){
      Alert.success({
        title: 'Operación exitosa',
        message 
      })
    }else{
      Alert.error({
        title: "Error",
        message: response.data.message
      })
    }

  }

  return (
    <div style={{ padding: '3rem', maxWidth: '90rem' }}>
       <h1 style={{ fontSize: '2.8rem', marginBottom:'1rem' }}> Categorías </h1>
       <Formik
          initialValues={ initialValues || { name:'', description:'' } }
          onSubmit={ values => handleOnSubmit( values )}
          validationSchema={ Yup.object(yupValidationSchema()) }
        >
          {
            () => (
              <Form>
                <CustomTextInput 
                  placeholder="Nombre" 
                  name="name" 
                  className="text-input_324af" 
                /> 

                <CustomTextArea 
                  placeholder="Descripción" 
                  name="description" 
                  className="text-area_324af"
                />

                <button 
                  type="submit" 
                  className="btn btn-primary py-2 px-4 mt-4 text-white fs-3 d-inline-block"
                  style={ { borderRadius: '6px' } }
                >
                  Enviar
                </button>
              </Form>
            )
          }
        </Formik>
    </div>
  )
}

export default CategoriesForm