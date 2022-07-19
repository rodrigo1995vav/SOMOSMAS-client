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
        height:`13rem`
      }


    useEffect(()=>{
        getPublic(`/news`)
        .then(res=>setData(res.data))
        .catch(err=>setError(err))
        .finally(()=>{setLoading(false)})
    },[])

    if(loading){
        return <Loader className="news__loader"/>
    }

    return (

        <main className="container-fluid w-100" >

            <h1 className="title text-center my-5 h-auto">Novedades</h1>
            <div className="container-fluid h-100 p-0 d-flex flex-column justify-content-center align-items-center py-3">
            {
                data&&data.entries.map(news => (
                    <div key={news.id} className="card news__card" >
                        <img  src={news.image} style={imgStyles} alt="..."/>
                        <div className="news__card-body">
                            <h5 className="card-title fs-1">{news.name}</h5>
                            <Link to={`/novedades/${news.id}`} style={{ fontSize: '1.5rem' }}>Ver mas</Link>
                        </div>
                    </div>
                    )
                )
                    
            }
            </div>
         
            
        </main>
       

    );

}

export default News;
