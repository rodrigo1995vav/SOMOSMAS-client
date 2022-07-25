import { Link, useParams } from "react-router-dom";

import { useState } from "react";
import { useEffect } from "react";

import { Loader } from "../../components/Loader";
import Paginator from "../../components/Paginator";
import { getPublic } from "../../services/apiServices";

const News = () => {

    const [data,setData] = useState(null)
    const [error,setError] = useState(false)
    const [loading,setLoading] = useState(true)

    const { page } = useParams();
    const limit = 8;

    useEffect(()=>{
        getPublic(`/news/${ limit }/${ page }`)
        .then(res=>setData(res.data.entries))
        .catch(err=>setError(err))
        .finally(()=>{setLoading(false)})
    },[page])

    if(loading){
        return <Loader className="news__loader"/>
    }

    return (

        <main className="container-fluid w-100" >

            <h1 className="title text-center my-5 h-auto">Novedades</h1>
            <div className="container-fluid h-100  news__container">
                {
                    data&&data.result.map(news => (
                        <div key={news.id} className=" shadow-lg news__card" >
                            <img  
                                src={`${process.env.REACT_APP_PUBLIC_URL_API}/activity/image/${news.image}`} 
                                style = {{objectFit:'cover', objectPosition:'center'}}
                                className="news__image"
                                alt="..."
                            />
                            <div className="news__card-body">
                                <h5 className="card-title fs-3 ">{news.name}</h5>
                                <Link to={`/novedades/${news.id}/novedad`}> <button className="btn btn-light text-white fs-4 m-1">Ver mas</button></Link> 
                            </div>
                        </div>
                        )
                    )
                        
                }
                <Paginator 
                    currentPage={page} 
                    pageCount={ data.pages } 
                    justify={'center'} 
                />
            </div>
         
            
        </main>
       

    );

}

export default News;

