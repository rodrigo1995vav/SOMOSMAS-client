import TestimonialsListItem from "./TestimonialsListItem"


const TestimonialsList = ({testimonials}) =>{

    let isEmpty
    testimonials.length===0 ? isEmpty = true : isEmpty = false

    return ( isEmpty ? 
            <h1 className="text-center">No hay testimonios</h1> 
            :     
            <div className="m-100  h-100"   >
                <div className=" d-flex  p-4 pb-3 justify-content-between align-items-center  h-auto border-bottom">
                    <h1 className="ms-2">Testimonios</h1>
                    <span  className="me-2  ">Acciones</span> 
                </div>
                <div className="w-100 mh-100 overflow-auto "  >
                <ul className="list-group  overflow-hidden text-wrap ">            
                {testimonials.map((testimonial) => (<TestimonialsListItem  testimonial={testimonial}></TestimonialsListItem>))}
                </ul>
                </div>
                
            </div>
    )
}

export default TestimonialsList