import { useState } from "react"
import { useEffect } from "react"
import { getPrivate } from "../../services/apiServices"
import { Loader } from '../../components/Loader'
import ErrorSign from "../../components/ErrorSign"
import TestimonialsList from "./TestimonialsList"



// Hardcoded data
const arrayTestimonials = [{name:'somepeopledwdawdwdwdwd dawdawdwdw'},
{name:'some people'},{name:'some people'},{name:'some people'},{name:'some people'},
{name:'some people'},{name:'some people'},{name:'some people'},{name:'some people'},
{name:'some people'},{name:'some people'},{name:'some people'},{name:'some people'},
]


//This component always takes the entire width of its container

const Testimonials = () => {

    const [data,setData] = useState(arrayTestimonials)
    const [loading,setLoading] = useState(false)
    const [error, setError] = useState(false)


    useEffect(()=>{
      /* getPrivate("/testimonials")
            .then(res=>res.json())
            .then(res=>setData(res))
            .catch(err => setError(err))
            .finally(setLoading(false)) */
     },[])




    if(loading){
        return  <main className="w-100 h-auto p-0  justify-content-center align-items-center bg-white">
                  <Loader></Loader>
                </main>
    }


    return(
    <main className="w-100 h-auto p-0  justify-content-center align-items-center bg-white">
        {  data  ? <TestimonialsList testimonials={data} />
          : error && <ErrorSign error={{message:'Show error content'}} />}
    </main>)
}








export default Testimonials