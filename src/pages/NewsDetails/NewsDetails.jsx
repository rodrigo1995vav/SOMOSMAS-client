import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { getPrivate } from "../../services/apiServices";
import ErrorSign from "../../components/ErrorSign";
import { Loader } from '../../components/Loader';
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
    height: imgHeight
  }


 useEffect(()=>{
   getPrivate(`/news/${id}`)
   .then(({ data })=>setData(data.payload))
   .catch(err=>setError(err))
   .finally(setLoading(false))
 },[id])

 if(loading){
    return(
      <main className='container-fluid h-100 p-0 d-flex justify-content-center align-items-center bg-white '>
        <Loader></Loader> 
      </main>
    )  
 }


  return (
    <main className='container-fluid h-100 p-0 d-flex justify-content-center align-items-center bg-white '>
        {  
          data 
            ?  <NewsDetailCard data={data} imgStyles={{ imgStyles }}/>
            : error && <ErrorSign error={error} />
        }
    </main>
  )
}

export default NewsDetails