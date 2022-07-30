import { useState } from "react";
import { useEffect } from "react";
import { Loader } from "../../../components/Loader";
import { getPublic } from "../../../services/apiServices";
import { useParams } from "react-router-dom";

const Contacts = () => {
  const query = useParams()
  const page = query.page || 1

  const [data,setData] = useState(null)
  const [error,setError] = useState(false)
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
        getPublic(`/contacts/list?page=${page}`)
        .then(res=> setData(res.data.contacts))
        
        .catch(err=>setError(err))
        .finally(()=>{setLoading(false)})
        

    },[])
  
    if(loading){
         return <Loader></Loader>
    }

    return (

        <main className="container-fluid w-100">

            <h1 className="title text-center my-5 h-auto">Contactos</h1>
            <div className="d-flex-inline h-100 p-0 d-flex flex-column justify-content-center align-items-center bg-white">
            {console.log(data)}
                {data&&data.map(item => (
                 
                    <div key={item.id} className="card bg-light">
                    <div className="card-body overflow-auto ">
                        <h5 className="card-title fs-5">{item.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{item.email}</h6>
                        <h6 class="card-subtitle mb-2" >{item.phone}</h6>
                        <p class="card-text">{item.message}</p>
                    </div>
               </div>
                    ))
                    
            }
            </div>            
        </main>
       );
}

export default Contacts;