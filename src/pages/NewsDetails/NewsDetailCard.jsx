import { useNavigate } from "react-router-dom"

const NewsDetailCard = ({data , imgStyles}) => {

    const navigate = useNavigate();

    return ( <div className="newsdetail">
               <div className="newsdetail__image-container">
                 <img 
                  className="newsdetail__image" 
                  src={`${process.env.REACT_APP_PUBLIC_URL_API}/activity/image/${data.image}`}  
                  alt="entry"
                />
               </div>
               <div className="card-body overflow-auto newsdetail__text">
                   <h5 className="card-title fs-1">{data.name}</h5>
                   <p className="card-text fs-4">{data.content}</p>
                   <button 
                    onClick={ () => navigate(-1) }
                    className='btn btn-primary text-white px-5 fs-3'
                    style ={{ borderRadius:"6px" }}
                   >
                        Volver
                   </button>
               </div>
              
            </div>)
  }


  export default NewsDetailCard