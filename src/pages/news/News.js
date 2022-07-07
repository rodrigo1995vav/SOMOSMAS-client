import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Loader } from "../../components/Loader";
import { getPublic } from "../../services/apiServices";

const News = () => {

    const [data,setData] = useState(null)
    const [error,setError] = useState(false)
    const [loading,setLoading] = useState(true)

    //TODO: Extract the news from the API
    //Test variables
    const news = [
        {
            id: 1,
            name: "News 1",
            content: "Content 1",
            image: [
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            ],
        },
        {
            id: 2,
            name: "News 2",
            content: "Content 2",
            image: [
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            ]
        }
    ]

    useEffect(()=>{
        getPublic(`/news`)
        .then(res=>res.json())
        .then(res=>setData(res))
        .catch(err=>setError(err))
        .finally(setLoading(false))
    },[])


    if(loading){
        return <Loader> </Loader>
    }

    return (

        <div className="container">
            <h1 className="title text-center my-5">Novedades</h1>
            {
                news.map(news => (
                    <div className="card my-5" style={{ borderRadius: 15 }}>
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" >
                            <div className="carousel-indicators">
                                {news.image.map((image, index) => (<button type="button"
                                    key={image.id}
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to={index}
                                    className={index === 0 ? "carousel-button active" : "carousel-button"}
                                    aria-current={index === 0 ? "true" : ""}
                                    aria-label={`Slide ${index + 1}`}>
                                </button>
                                ))}
                            </div>
                            <div className="carousel-inner" >
                                {news.image.map((image, index) => (<div key={image.id} className={index === 0 ? "carousel-item active" : "carousel-item"}>
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
                            <Link to={`/news/${news.id}`} className="btn btn-primary fs-4" style={{ borderRadius: 30, width: 115 }}>Ver más</Link>
                        </div>
                    </div>
                ))
            }
        </div>

    );

}

export default News;