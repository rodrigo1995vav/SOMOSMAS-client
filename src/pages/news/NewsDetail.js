import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../../components/Loader';
import { getPublic } from "../../services/apiServices";

export const NewsDetail = () => {

    //TODO: Extract the news from the API and use useParams to get the news id
    //Test variables

        const { id } = useParams()

        const [data,setData] = useState(null)
        const [error,setError] = useState(false)
        const [loading,setLoading] = useState(true)



    useEffect(()=>{
        getPublic(`/news/${id}`)
        .then(res=>res.json())
        .then(res=>setData(res))
        .catch(err=>setError(err))
        .finally(setLoading(false))
    },[id])


    if(loading){
        return <Loader></Loader>
    }

    return (
        <div className="container">
            {
                data.map(news => (
                    <div className="card my-5" style={{ borderRadius: 15 }}>
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" >
                            <div className="carousel-indicators">
                                {news.image.map((image, index) => (<button type="button"
                                    key={image}
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to={index}
                                    className={index === 0 ? "carousel-button active" : "carousel-button"}
                                    aria-current={index === 0 ? "true" : ""}
                                    aria-label={`Slide ${index + 1}`}>
                                </button>
                                ))}
                            </div>
                            <div className="carousel-inner" >
                                {news.image.map((image, index) => (<div key={image} className={index === 0 ? "carousel-item active" : "carousel-item"}>
                                    <img className="d-block w-100" style={{ borderRadius: 20 }} src={image} alt={image} />
                                </div>
                                ))}
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            </button>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title text-center fs-1">{news.name}</h5>
                            <p className="card-text text-center fs-3">{news.content}</p>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

