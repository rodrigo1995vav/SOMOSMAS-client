<<<<<<< HEAD
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Alert from '../../services/AlertService';
import { postPrivate, putPrivate } from '../../services/apiServices';
=======

import { Formik, Form } from 'formik';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';
import Alert from '../../services/AlertService';
import { postPrivate, putPrivate } from '../../services/apiServices';

>>>>>>> cea4c65b514390119c906a1100c11439877077ed
import { CustomTextArea } from '../TextArea';
import { CustomTextInput } from '../TextInput';


<<<<<<< HEAD
const CategoriesForm = ({ initialValues, selfClose, setCategories }) => {  
=======
const CategoriesForm = ({ initialValues }) => {

  const { id } = useParams();
>>>>>>> cea4c65b514390119c906a1100c11439877077ed

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
<<<<<<< HEAD
      const id = initialValues.id
=======
>>>>>>> cea4c65b514390119c906a1100c11439877077ed
      response = await putPrivate( `/categories/`, id, values );
      message  = "Categoria actualizada exitosamente"
    }else{
      response = await postPrivate('/categories', values );
      message  = "Categoria creada exitosamente"
    }

<<<<<<< HEAD
    if( response.data === 1 ){
      setCategories( categories =>{
        const updatedCategories = categories.map( cat => {
          if( cat.id === values.id ){
            return values;
          }
          return cat
        } )
  
        return updatedCategories;
      } )

=======
    if( response.data.categoryCreated || response.data === 1 ){
>>>>>>> cea4c65b514390119c906a1100c11439877077ed
      Alert.success({
        title: 'Operación exitosa',
        message 
      })
<<<<<<< HEAD
    }else if( response.data.categoryCreated ){

      setCategories(categories => ([ ...categories, values ]) )

      Alert.success({
        title: 'Operación exitosa',
        message 
      })

=======
>>>>>>> cea4c65b514390119c906a1100c11439877077ed
    }else{
      Alert.error({
        title: "Error",
        message: response.data.message
      })
    }

<<<<<<< HEAD
    handleSelfClose();

  }

  const handleSelfClose = () => {
    selfClose( state => ({
      ...state,
      opened: false,
    }) )
  }

  return (

      <div className="categoriesForm__container">
        <div 
          className='categoriesForm__close-button'
          onClick={ handleSelfClose} 
        >
          X
        </div>
        <h1 className='categoriesForm__title'> Categorías </h1>
        <Formik
            initialValues={ initialValues || { name: '', description:'' } }
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

=======
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
>>>>>>> cea4c65b514390119c906a1100c11439877077ed
  )
}

export default CategoriesForm