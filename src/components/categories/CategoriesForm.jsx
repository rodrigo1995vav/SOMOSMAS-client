import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Alert from '../../services/AlertService';
import { postPrivate, putPrivate } from '../../services/apiServices';
import { CustomTextArea } from '../TextArea';
import { CustomTextInput } from '../TextInput';


const CategoriesForm = ({ initialValues, selfClose, setCategories }) => {  

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
      const id = initialValues.id
      response = await putPrivate( `/categories/`, id, values );
      message  = "Categoria actualizada exitosamente"
    }else{
      response = await postPrivate('/categories', values );
      message  = "Categoria creada exitosamente"
    }

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

      Alert.success({
        title: 'Operación exitosa',
        message 
      })
    }else if( response.data.categoryCreated ){

      setCategories(categories => ([ ...categories, values ]) )

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

  )
}

export default CategoriesForm