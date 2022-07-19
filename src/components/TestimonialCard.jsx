


const TestimonialCard = ({name, image, content}) => {

    return<div className=" m-1 bg-secondary overflow-hidden d-flex flex-row flex-md-column gap-4 gap-md-0" style={{borderRadius:'.9rem', height:'fit-content'}} >
                <div className="w-25 w-md-50 h-100 ">
                    <img src={image}  className="w-100 h-100 p-2 p-md-0 mt-md-4 ms-md-4"  style={{borderRadius:'10rem'}} alt="" />
                </div>
                <div className="p-2 p-md-0 m-md-4  w-100 h-100">
                <h5 class="">{name}</h5>
                <p class="">{content}</p>
                </div>
        </div>
}

export default TestimonialCard

