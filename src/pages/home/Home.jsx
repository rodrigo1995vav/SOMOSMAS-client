import Carousel from "../../components/Carousel";
import { useEffect, useState } from "react";
import { Loader } from "../../components/Loader";
import "../../styles/index.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import CardCarousel from "../../components/CardCarousel";
import TestimonialCard from "../../components/TestimonialCard";
import teamWorkImage from '../../img/Login/team-work.jpg'
import MemberCard from "../../components/MemberCard";
import { getPublic } from '../../services/apiServices';



function Home() {
  //Hardcoded variables
  const hcWelcomeMessage =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est ipsum placeat natus! A quam porro possimus. Optio harum cupiditate rem dolore itaque. Tempora quae dignissimos excepturi sunt nostrum sint accusantium.";
  
  const hcImage = "Manos 10.jpg";
  const arrayImg = [{ imageUrl: "Manos 10.jpg", text: "text-1" },{ imageUrl: "Manos 10.jpg", text: "text-1" }];

  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [news, setNews] = useState([]);
  const [image, setImage] = useState("");
  const navigate = useNavigate()
  const {user} = useSelector ((state) => state.userLogged);

  const imgStyles = {
    objectFit:'cover',
    objectPosition:'centered',
    overflow:'hidden',
    borderRadius: '1.5rem',
    height:`100%`
  }

  useEffect(() => {
    getPublic(`http://localhost:3001/news`).then(data => {
      const entries = data.data.entries
      const array = entries.map(entry => {
        return {imageUrl: entry.image, text: entry.name}
      })
      setNews(array.slice(array.length - 3).reverse());
    }) 
    setWelcomeMessage(hcWelcomeMessage);
    setImage(hcImage);
  }, []);

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
          <h1 className="">Nuestro Staff</h1>
          <a className="fs-4  text-black button_Expand" href="/nosotros">
            Ver todos<i className="bi bi-caret-right-fill "></i>
          </a>
        </header>
        <section className="h-100" >
          <CardCarousel carouselId={'members-card-carousel'} cardsData={[{name:'dawdawd dawdaw',image:'https://picsum.photos/200'},
                                    {name:'dawdawd dawdawd dawdawdw',image:'https://picsum.photos/200'},
                                    {name:'dawdawd',image:'https://picsum.photos/200'},
                                    {name:'dawdawd',image:'https://picsum.photos/200'},
                                    {name:'dawdawd',image:'https://picsum.photos/200'},
                                    {name:'dawdawd',image:'https://picsum.photos/200'},
                                    {name:'dawdawd',image:'https://picsum.photos/200'},
                                    {name:'dawdawd',image:'https://picsum.photos/200'},
                                    {name:'dawdawd',image:'https://picsum.photos/200'},
                                    {name:'dawdawd',image:'https://picsum.photos/200'},
                                    {name:'dawdawd',image:'https://picsum.photos/200'},
                                    {name:'dawdawd',image:'https://picsum.photos/200'}
                                    ]} 
          cardsPerSlide={5} CardComponent={MemberCard}></CardCarousel>
        </section>
        <header className=" my-5 container-fluid d-flex flex-row justify-content-between align-items-center">
          <h1 className="">Testimonios</h1>
          <a className="fs-4  text-black button_Expand" href="/testimonios">
            Ver todos<i className="bi bi-caret-right-fill "></i>
          </a>
        </header>
        
        <section className="h-100" >
          <CardCarousel carouselId={'testimonial-card-carousel'} cardsData={[{name:'dawdawd dawdaw',image:'https://picsum.photos/200',content:'“testimoniotestimoniotestim oniotestim oniote stimoniotest imoniotestim oniote stimoniotestimoniotestimoni”'},
                                    {name:'dawdawd dawdawd dawdawdw',image:'https://picsum.photos/200',content:'“test imoniotestimo niotestimo niote stimoniotestimon iotest imoniot estimon iotesti moniotestimon iotest imoni”'},
                                    {name:'dawdawd',image:'https://picsum.photos/200',content:'“testimon iotestimoniote stimo niote st imoniotestimon iotestimoniotest imoniotest imoniotestim oniotestimo ni”'},
                                    {name:'dawdawd',image:'https://picsum.photos/200',content:'“testimoniotes tim oniotestimo niotestimoniote stimoniotest imoniotestimo niotestimonio testimonio testimoni”'},
                                    {name:'dawdawd',image:'https://picsum.photos/200',content:'dawdawdawdaw dawd dawdawdawdawdawadaw dawdawda wdawdawd daadw'},
                                    {name:'dawdawd',image:'https://picsum.photos/200',content:'dawdawdawdawdawd dawdawdawdawd awadaw dawdawd awdawdawdwdaadw'},
                                    {name:'dawdawd',image:'https://picsum.photos/200',content:'dawdawdawd awdawd daw  dawdawdaw dawadaw dawdawdawdawdawdwdaadw'},
                                    {name:'dawdawd',image:'https://picsum.photos/200',content:'dawd awdawdawdawd dawdawdawdawdawadaw dawdawdawdawdawdwdaadw'},
                                    {name:'dawdawd',image:'https://picsum.photos/200',content:'dawdawdawdawdawd da wdawdawdawdawadaw dawdawdaw dawdawdwdaadw'},
                                    {name:'dawdawd',image:'https://picsum.photos/200',content:'dawdawdawdawdawd dawda wda wdawdawadaw d awdawdawdawd awdwdaadw'},
                                    {name:'dawdawd',image:'https://picsum.photos/200',content:'dawdawdawdawdawd dawdawdawdawdawadaw dawdawdawdawda wdwdaadw'},
                                    {name:'dawdawd',image:'https://picsum.photos/200',content:'dawdawdawdawdawd dawdawdawdaw dawadaw dawdawdawdawdaw dwdaadw'}
                                    ]} 
          cardsPerSlide={5} CardComponent={TestimonialCard}></CardCarousel>
        </section>
        <header className=" my-5 container-fluid d-flex flex-row justify-content-between align-items-center">
          <h1 className="">Últimas Novedades</h1>
          <a className="fs-4  text-black button_Expand" href="/novedades">
            Ver todas<i className="bi bi-caret-right-fill "></i>
          </a>
        </header>
        <section>
          {!arrayImg ? (
            <Loader className="d-flex justify-content-center align-self-center"></Loader>
          ) : (
            <Carousel imgSlides={news} imgHeight="500px" />
          )}
        </section>
    </div>
  );
}

export default Home;
