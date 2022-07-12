const NewsDetailCard = ({data , imgStyles}) => {


    return ( <div className="card  bg-light">
               <img  src={data.image} className="card-img-top" style={imgStyles} alt="..."/>
               <div className="card-body overflow-auto ">
                   <h5 className="card-title fs-1">{data.name}</h5>
                   <p className="card-text fs-4">{data.content}</p>
                </div>
            </div>)
  }


  export default NewsDetailCard