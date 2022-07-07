import { useState , useEffect } from "react"
import  { useParams } from 'react-router-dom'
import { getPublic } from "../../services/apiServices"
import { Loader } from '../../components/Loader'
import ErrorSign from "../../components/ErrorSign"
import TestimonialsList from "./TestimonialsList"



// Hardcoded data
const arrayTestimonials = {total_testimonials: 40 ,testimonials:[{name:'somepeopledwdawdwdwdwd dawdawdwdw', id:1},
{name:'some people', id:2},{name:'some people', id:3},{name:'some people', id:4},{name:'some people', id:5},
{name:'some people', id:6},{name:'some people', id:7},{name:'some people', id:8},{name:'some people', id:9},
{name:'some people', id:10},
]}


//This component always takes the entire width of its container

const Testimonials = () => {

    const { page } = useParams()

    //define table rows in request with limit
    const limit = 10
    const [pages, setPages] =  useState(null)
    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(true)
    const [error, setError] = useState(false)


    useEffect(()=>{
      /* getPublic(`/testimonios/${limit}/${page}`)
            .then(res=>res.json())
            .then(res=>setData(res))
            .catch(err => setError(err))
            .finally(setLoading(false)) */
            setData(arrayTestimonials)
            if(data){
              let pageCount =  Math.trunc(data.total_testimonials / limit) 
              data.total_testimonials % limit > 0 && ( pageCount += 1 )

              setPages(pageCount)
              setLoading(false)
             }
        

     },[data])




    if(loading){
        return  <main className="w-100 h-auto p-0  justify-content-center align-items-center bg-white">
                  <Loader></Loader>
                </main>
    }


    return(
    <main className="w-100 h-auto p-0  justify-content-center align-items-center bg-white">
        {  data  ? <TestimonialsList testimonials={data.testimonials} pages={pages} />
          : error && <ErrorSign error={{message:'Show error content'}} />}
    </main>)
}








export default Testimonials