
import { getPublic } from "../../services/apiServices"
import Alert from '../../services/AlertService'

const TestimonialsListItem = ({testimonial}) => {


    const deleteTestimonial = (testimonial) =>{
        const requestDelete = getPublic('delete endpoint')
        Alert.confirmRequest({title:`¿Desea eliminar a ${testimonial}?`}, 
                             requestDelete, 
                            ()=> Alert.success({title:'Testimonio eliminado'}))
    }

    return(
            <li key={testimonial.name} className=" list-group-item list-group-item-action p-4  d-flex justify-content-between align-items-center">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold align-content-center fs-4">
                            {testimonial.name}
                        </div>
                    </div>
                    <i onClick={()=> console.log('Open form')} 
                    style={{color:'#0038FF'}}
                    className=" ms-4 fs-2 bi bi-pencil-square align-self-center"></i>
                    <i onClick={()=> deleteTestimonial(testimonial.name)} 
                    className=" ms-4  fs-2 bi bi-trash3-fill h3 align-self-center" 
                    style={{position: 'relative', top: '1px', color:'#ff0000'}}></i>
          </li>)
}


export default TestimonialsListItem