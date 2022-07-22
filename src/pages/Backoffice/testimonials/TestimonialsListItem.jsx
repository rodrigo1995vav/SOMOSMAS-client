import Alert from "../../../services/AlertService"
import { deletePrivate } from "../../../services/apiServices"




const TestimonialsListItem = ({testimonial}) => {


    const deleteTestimonial = (testimonial) =>{
    
        Alert.confirmRequest({title:`¿Desea eliminar a ${testimonial.name}?`}, 
                            ()=> deletePrivate(`/testimonials/${testimonial.id}`), 
                            ()=> Alert.success({title:'Testimonio eliminado'}))

    }

    return(
            <li  className=" list-group-item list-group-item-action p-4  d-flex justify-content-between align-items-center">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold align-content-center fs-4">
                            {testimonial.name}
                        </div>
                    </div>
                    <i onClick={()=> console.log('Open form')} 
                    style={{color:'#0038FF'}}
                    className=" ms-4 fs-2 bi bi-pencil-square align-self-center"></i>
                    <i onClick={()=> deleteTestimonial(testimonial)} 
                    className=" ms-4  fs-2 bi bi-trash3-fill h3 align-self-center" 
                    style={{position: 'relative', top: '1px', color:'#ff0000'}}></i>
          </li>)
}


export default TestimonialsListItem