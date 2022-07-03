
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { getPublic } from "../../services/apiServices";
import ErrorSign from "../ErrorSign";
import { Loader } from '../Loader';
import NewsDetailCard from "./NewsDetailCard";


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
  // Future change: Use fetch service to fetch with token.
   getPublic(`/novedades/${id}`)
      .then(res=>res.json())
      .then(res=> setData(res))
      .catch(err => setError(err))
      .finally(setLoading(false))
      
 },[id])

    return (
    <main className='container-fluid h-100 p-0 d-flex justify-content-center align-items-center bg-white '>

        { loading ? <Loader></Loader> 

          : data ?  <NewsDetailCard data={data} imgStyles = {imgStyles}  />

          : error && <ErrorSign error={error} />}
    </main>
        )
}

export default NewsDetails



