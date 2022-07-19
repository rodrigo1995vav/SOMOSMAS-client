import Carousel from "../../components/Carousel";
import { useEffect, useState } from "react";
import { Loader } from "../../components/Loader";
import "../../styles/index.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import CardCarousel from "../../components/CardCarousel";
import TestimonialCard from "../../components/TestimonialCard";



function Home() {
  //Hardcoded variables
  const hcWelcomeMessage =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est ipsum placeat natus! A quam porro possimus. Optio harum cupiditate rem dolore itaque. Tempora quae dignissimos excepturi sunt nostrum sint accusantium.";
  const hcFeatures = [
    { title: "feature 0", content: "feature 0 body", image: "Manos 10.jpg" },
    { title: "feature 1", content: "feature 1 body", image: "Manos 10.jpg" },
    { title: "feature 2", content: "feature 2 body", image: "Manos 10.jpg" },
    { title: "feature 3", content: "feature 3 body", image: "Manos 10.jpg" },
    { title: "feature 4", content: "feature 4 body", image: "Manos 10.jpg" },
  ];
  const hcImage = "Manos 10.jpg";
  const arrayImg = [{ imageUrl: "Manos 10.jpg", text: "text-1" },{ imageUrl: "Manos 10.jpg", text: "text-1" }];

  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [news, setFeatures] = useState([]);
  const [image, setImage] = useState("");
  const navigate = useNavigate()
  const {user} = useSelector ((state) => state.userLogged);

  useEffect(() => {
    setWelcomeMessage(hcWelcomeMessage);
    setFeatures(hcFeatures.slice(hcFeatures.length - 3).reverse());
    setImage(hcImage);
  }, []);

  return (
    <div className="container mt-5">
    
        <section className="welcomeContainer">
          <div className="welcomeMessage">
            <h1>Hola! Bienvenidx</h1>
            <p>{welcomeMessage}</p>
            <button className="btn" onClick={() => navigate("/contacto")}>Contactanos</button>
          </div>
          <div className="imageContainer">
            <img className="welcomeImage" src={image} alt="" />
          </div>
        </section>
        <header className=" my-5 container-fluid d-flex flex-row justify-content-between align-items-center">
          <h1 className="">Testimonios</h1>
          <a className="fs-4  text-black button_Expand" href="/testimonios">
            Ver todos<i className="bi bi-caret-right-fill "></i>
          </a>
        </header>
        <section >
          <CardCarousel cardsData={[{name:'dawdawd',image:'https://picsum.photos/200',content:'“testimoniotestimoniotestim oniotestim oniote stimoniotest imoniotestim oniote stimoniotestimoniotestimoni”'},
                                    {name:'dawdawd',image:'https://picsum.photos/200',content:'“test imoniotestimo niotestimo niote stimoniotestimon iotest imoniot estimon iotesti moniotestimon iotest imoni”'},
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
            <Carousel imgSlides={arrayImg} />
          )}
        </section>
    </div>
  );
}

export default Home;
