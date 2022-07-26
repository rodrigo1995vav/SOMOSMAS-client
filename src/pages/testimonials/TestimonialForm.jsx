import { Formik, Form } from 'formik';

import * as Yup from 'yup';

import Alert from '../../services/AlertService';
import { postPrivate, putPrivate } from '../../services/apiServices';

import { CustomTextArea } from '../../components/TextArea';
import { useNavigate } from 'react-router-dom';



const TestimonialForm = ({close , userData }) => {  

  const navigate = useNavigate()

  // It returns the validation schema object used by Formik
  const yupValidationSchema = () => ({
  
    content: Yup.string()
                  .min(10, 'Debe tener al menos 10 caracteres')
                  .required('Requerido')
  })

  const handleOnSubmit = ( values) => {
        values.image = userData.image
        values.name = `${userData.firstName} ${userData.firstName} `
        values.userId = userData.id
        console.log(values)
        postPrivate(`/testimonials`,values).then((res)=> {Alert.success({title:'Testimonio creado/actualizado'}); close() ;navigate('/testimonios/1') } )
                                            .catch(err=>Alert.error({title:err.name, message:err.message }))
  }

  

  return (

      <div className="categoriesForm__container shadow-lg">
        <div className='w-100 d-flex flex-row justify-content-end mt-0'>
        <button
          className='btn btn-primary py-2 px-4 mt-4 text-white  fs-3'
          onClick={close} 
        >
          X
        </button>
        </div>
        <h1 className='categoriesForm__title'> Dejar testimonio </h1>
        <Formik
            initialValues={ {  content:'' } }
            onSubmit={ values => handleOnSubmit( values )}
            validationSchema={ Yup.object(yupValidationSchema()) }
          >
            {
              () => (
                <Form>
                  

                  <CustomTextArea 
                    placeholder="Mi testimonio..." 
                    name="content" 
                    className="text-area_324af"
                  />

                  <button 
                    type="submit" 
                    className="btn btn-light py-2 px-4 mt-4 text-white fs-3 d-inline-block"
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

export default TestimonialForm