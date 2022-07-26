import Carousel from "../../components/Carousel";
import { useEffect, useState } from "react";
import { Loader } from "../../components/Loader";

import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CardCarousel from "../../components/CardCarousel";
import TestimonialCard from "../../components/TestimonialCard";
import teamWorkImage from '../../img/Login/team-work.jpg'
import HomeMemberCard from "../../components/HomeMemberCard";
import { getPublic } from '../../services/apiServices';
import {getAllMembers }from "../../store/slices/members/getAllMembers";




function Home() {
  //Hardcoded variables
  const hcWelcomeMessage =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est ipsum placeat natus! A quam porro possimus. Optio harum cupiditate rem dolore itaque. Tempora quae dignissimos excepturi sunt nostrum sint accusantium.";
  
  const hcImage = "Manos 10.jpg";
  const arrayImg = [{ imageUrl: "Manos 10.jpg", text: "text-1" },{ imageUrl: "Manos 10.jpg", text: "text-1" }];
  const members = useSelector((state) => state.allMembers)
  const dispatch = useDispatch()
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [news, setNews] = useState([]);
  const [image, setImage] = useState("");
  const [testimonials, setTestimonials] = useState({data:null , loading:true, error: false})
  const navigate = useNavigate()


  const imgStyles = {
    objectFit:'cover',
    objectPosition:'centered',
    overflow:'hidden',
    borderRadius: '1.5rem',
    height:`100%`
  }

  useEffect(() => {
    getPublic(`/news/3/1`).then(({data}) => {
      const entries = data.entries.result
      
      const array = entries.map(entry => {
        return {imageUrl: entry.image, text: entry.name}
      })
      setNews(array);
    }) 
    setWelcomeMessage(hcWelcomeMessage);
    setImage(hcImage);

    //Testimonios `/testimonials/:limit/:page`
    getPublic(`/testimonials/15/1`)
    .then(({data})=>{
      setTestimonials({...testimonials, data: data.testimonials}); 
     })
    .catch(err => (setTestimonials({...testimonials,error:err})))
    .finally(setTestimonials({...testimonials, loading:false})) 
    // Staff
    dispatch(getAllMembers(1,0))
  },[]);

  return (
    <div className="container mt-5">
    
        <section className="d-flex flex-column flex-md-row gap-5 my-5 justify-content-center align-items-center w-100" 
                  style={{height:'fit-content'}}>
          <div className="w-100 d-flex flex-column justify-content-center gap-4" style={{height:'50vh'}} >
            <h1 className="text-center text-md-start" style={{fontSize:'5rem'}}>Hola! Bienvenidx</h1>
            <p className="text-center text-md-start fs-md-2 fs-3 " >{welcomeMessage}</p>
            <button className="btn-primary text-white fs-1 px-5 py-2 align-self-center align-self-md-start shadow-lg" style={{borderRadius:'1.5rem'}} onClick={() => navigate("/contacto")}>Contactanos</button>
          </div>
          <div className="w-100  d-flex flex-column flex-lg-row justify-content-center align-items-center"
                style={{height:'50vh'}}>
            <img className="img-fluid w-100 " style={imgStyles}  src={teamWorkImage} alt="" />
          </div>
        </section>
        <header className=" my-5 container-fluid d-flex flex-row justify-content-between align-items-center">
          <h1 className="">Últimas Novedades</h1>
          <Link className="fs-4  text-black button_Expand" to="/novedades/1">
            Ver todas<i className="bi bi-caret-right-fill "></i>
          </Link>
        </header>
        <section>
          {!arrayImg ? (
            <Loader className="d-flex justify-content-center align-self-center"></Loader>
          ) : (
            <Carousel imgSlides={news} imgHeight="500px" />
          )}
        </section>
        <header className=" my-5 container-fluid d-flex flex-row justify-content-between align-items-center">
          <h1 className="">Nuestro Staff</h1>
          <Link className="fs-4  text-black button_Expand" to="/nosotros/1">
            Ver todos<i className="bi bi-caret-right-fill "></i>
          </Link>
        </header>
        <section className="" >
        { members.members?<CardCarousel carouselId={'members-card-carousel'} cardsData={members.members.members.map((member)=>({...member,ong_role:member.Role_ong.role_ong}))} 
          cardsPerSlide={5} CardComponent={HomeMemberCard}></CardCarousel>: <Loader className="justify-self-center"></Loader>  }
        </section>
        <header className=" my-5 container-fluid d-flex flex-row justify-content-between align-items-center">
          <h1 className="">Testimonios</h1>
          <Link className="fs-4  text-black button_Expand" to="/testimonios/1">
            Ver todos<i className="bi bi-caret-right-fill "></i>
          </Link>
        </header>
        
        <section className="" >{!testimonials.data?<Loader className="justify-self-center"></Loader>:<CardCarousel carouselId={'testimonial-card-carousel'} cardsData={testimonials.data} 
                                                                                        cardsPerSlide={5} CardComponent={TestimonialCard}>
                                                                            </CardCarousel>}
        </section>
        
    </div>
  );
}

export default Home;
