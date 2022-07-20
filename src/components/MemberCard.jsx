

const MemberCard = ({name, image}) => {

    return<div className=" member-card shadow m-1 bg-secondary overflow-hidden d-flex flex-row flex-md-column gap-4 gap-md-0" style={{borderRadius:'.9rem'}} >
                <div className="w-auto h-auto m-auto ms-0 me-0 m-md-0  d-flex flex-row flex-md-column justify-content-start align-items-start w-md-50 h-100 ">
                    <img src={image}  className=" p-2 p-md-0 mt-md-4 ms-md-4"  
                            style={{borderRadius:'10rem', maxWidth:'7rem',maxHeight:'7rem'}} alt="" />
                             <h5>{name}</h5>
                </div>
                
        </div>
}

export default MemberCard

