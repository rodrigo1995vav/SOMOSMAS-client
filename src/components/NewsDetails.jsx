
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { getPrivate } from "../services/apiServices";
import { Loader } from './Loader';



// imgHeight defines a fixed image height with css units (40rem by default)

// image is always centered

const NewsDetails = ({imgHeight = '40rem'}) => {

 const {id} = useParams();

 const [data,setData] = useState(null)
 const [error,setError] = useState(false)
 const [loading,setLoading] = useState(true)

 const imgStyles = {
    objectFit:'cover',
    objectPosition:'centered',
    overflow:'hidden',
    height:`${imgHeight}`
  }


 useEffect(()=>{
   getPrivate(`/novedades/${id}`)
    .then(res=>res.json())
    .then(res=>setData(res))
    .catch(err=>setError(err))
    .finally(setLoading(false))
 },[id])

    return (
    <main className='container-fluid h-100 p-0 d-flex justify-content-center align-items-center bg-white '>

        { loading ? <Loader ></Loader> 

          : data ? <div className="card  bg-light">
                        <img  src={data.image} className="card-img-top" style={imgStyles} alt="..."/>
                        <div className="card-body overflow-auto ">
                            <h5 className="card-title fs-1">{data.name}</h5>
                            <p className="card-text fs-4">{data.content}</p>
                        </div>
                   </div>

          : error && <div className="bg-primary text-white alert alert-danger p-5 text-start" role="alert">
                        <h4 className="alert-heading fs-1 ">Error</h4>
                        <p className='fs-3'>{error.message}</p>
                     </div>}
    </main>
        )
}

export default NewsDetails