


const TestimonialCard = ({name, image, content}) => {

    return<div className=" testimonial-card shadow m-1 bg-secondary overflow-hidden d-flex flex-row flex-md-column gap-4 gap-md-0" style={{borderRadius:'.9rem'}} >
                <div className="w-auto h-auto m-auto ms-0 me-0 m-md-0  d-flex flex-row flex-md-column justify-content-start align-items-start w-md-50 h-100 ">
                    <img src={`${process.env.REACT_APP_PUBLIC_URL_API}/activity/image/${image}`}  className=" p-2 ms-3 pe-0 p-md-0 mt-md-4 ms-md-4"  
                            style={{borderRadius:'10rem', maxWidth:'7rem',maxHeight:'7rem'}} alt="" />
                </div>
                <div className="  m-auto mt-md-3 mx-md-3 px-1 px-md-2 w-100">
                <h5 className="">{name}</h5>
                <p className="text-justify text-break text-wrap text-left ">{content}</p>
                </div>
        </div>
}

export default TestimonialCard

