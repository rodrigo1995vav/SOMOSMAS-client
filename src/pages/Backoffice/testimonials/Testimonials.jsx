import { useState , useEffect } from "react"
import  { useParams } from 'react-router-dom'
import { getPublic } from "../../../services/apiServices"
import { Loader } from '../../../components/Loader'

import TestimonialsList from "./TestimonialsList";
import ErrorSign from "../../../components/ErrorSign"



// Hardcoded data
const arrayTestimonials = {total_testimonials: 40 ,testimonials:[{name:'somepeopledwdawdwdwdwd dawdawdwdw', id:1},
{name:'some people', id:2},{name:'some people', id:3},{name:'some people', id:4},{name:'some people', id:5},
{name:'some people', id:6},{name:'some people', id:7},{name:'some people', id:8},{name:'some people', id:9},
{name:'some people', id:10},
]}


//This component always takes the entire width of its container

const Testimonials = () => {

    const { page } = useParams()
    console.log(page)

    //define table rows in request with limit
    const limit = 10
    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(true)
    const [error, setError] = useState(false)


    useEffect(()=>{
      getPublic(`/testimonials/${limit}/${page}`)
            .then(res=>{
              setData(res.data) 
            })
            .catch(err => setError(err))
            .finally(setLoading(false)) 
     },[page])




    if(loading){
        return  <main className="w-100 h-100 p-0  justify-content-center align-items-center bg-white">
                  <Loader></Loader>
                </main>
    }


    return(
    <main className="w-100 h-auto p-0  justify-content-center align-items-center bg-white">
        {  data  ? <TestimonialsList testimonials={data.testimonials} pageCount={data.pageCount} />
          : error && <ErrorSign error={{message:'Show error content'}} />}
    </main>)
}








export default Testimonials