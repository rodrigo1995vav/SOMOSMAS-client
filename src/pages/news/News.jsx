import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Loader } from "../../components/Loader";
import { getPublic } from "../../services/apiServices";

const News = () => {

    const [data,setData] = useState(null)
    const [error,setError] = useState(false)
    const [loading,setLoading] = useState(true)

 



    const imgStyles = {
        objectFit:'cover',
        objectPosition:'centered',
        overflow:'hidden',
        height:`20rem`
      }


 
    console.log(data)
    useEffect(()=>{
        getPublic(`/news`)
        .then(res=>setData(res.data.entries))
        .catch(err=>setError(err))
        .finally(()=>{setLoading(false)})
        

    },[])

    if(loading){
        return <Loader> </Loader>
    }


    return (

        <main className="container-fluid w-100">

            <h1 className="title text-center my-5 h-auto">Novedades</h1>
            <div className="container-fluid h-100 p-0 d-flex flex-column justify-content-center align-items-center bg-white">
            {
                data&&data.map(news => (
                    <div key={news.name} className="card  bg-light">
                    <img  src={`${process.env.REACT_APP_PUBLIC_URL_API}/activity/image/${news.image}`} className="card-img-top img-fluid" style={imgStyles} alt="..."/>
                    <div className="card-body overflow-auto ">
                        <h5 className="card-title fs-1">{news.name}</h5>
                        <Link to={`/novedades/${news.id}`}>Ver mas</Link>
                    </div>
               </div>
                    ))
                    
            }
            </div>
         
            
        </main>
       

    );

}

export default News;
