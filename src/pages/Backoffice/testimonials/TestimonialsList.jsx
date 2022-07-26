import { useParams } from "react-router-dom"
import Paginator from "../../../components/Paginator"
import TestimonialsListItem from "./TestimonialsListItem"



const TestimonialsList = ({ testimonials , pageCount }) =>{

    const { page } = useParams()


    const isEmpty =  testimonials.length === 0
   
    
    if(isEmpty){
        return  <h1 className="text-center">No hay testimonios</h1> 
    }

    return ( 
            <div className="mw-100  h-100"   >
                <div className=" d-flex  p-4 pb-3 justify-content-between align-items-center  h-auto border-bottom">
                    <h1 className="ms-2">Testimonios</h1>
                    <span  className="me-2 h2 ">Acciones</span> 
                </div>
                <div className="w-100 mh-100 overflow-auto "  >
                <ul className="list-group  overflow-hidden text-wrap ">            
                {testimonials.map((testimonial) => (<TestimonialsListItem key={testimonial.id} testimonial={testimonial}></TestimonialsListItem>))}
                </ul>
                </div>
                   <div className="mw-100">
                    <Paginator currentPage={page} pageCount={pageCount} justify={'center'} ></Paginator>
                    </div>
                   
               
            </div>
    )
}

export default TestimonialsList