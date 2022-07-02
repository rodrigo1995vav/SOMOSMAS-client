import Carousel from '../../components/Carousel'
import { useEffect, useState } from 'react'
import { Loader } from '../../components/Loader'
import '../../styles/index.scss'


function Home() {

    //Hardcoded variables
    const hcWelcomeMessage = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est ipsum placeat natus! A quam porro possimus. Optio harum cupiditate rem dolore itaque. Tempora quae dignissimos excepturi sunt nostrum sint accusantium."
    const hcFeatures = [{ title: "feature 0", content: "feature 0 body", image: 'Manos 10.jpg' }, { title: "feature 1", content: "feature 1 body", image: 'Manos 10.jpg' }, { title: "feature 2", content: "feature 2 body", image: 'Manos 10.jpg' }, { title: "feature 3", content: "feature 3 body", image: 'Manos 10.jpg' }, { title: "feature 4", content: "feature 4 body", image: 'Manos 10.jpg' }]
    const hcImage = 'Manos 10.jpg'
    const arrayImg = [hcImage]

    const [welcomeMessage, setWelcomeMessage] = useState("");
    const [news, setFeatures] = useState([])
    const [image, setImage] = useState("")

    useEffect(() => {
        setWelcomeMessage(hcWelcomeMessage)
        setFeatures(hcFeatures.slice(hcFeatures.length - 4).reverse())
        setImage(hcImage)
    }, []);

    return (
        <div className='homePage'>
            <div className="welcomeContainer">
                <div className="welcomeMessage">
                    <h1>Hola! Bienvenidx</h1>
                    <p>
                        {welcomeMessage}
                    </p>
                    <button className="btn">Contactanos</button>
                </div>
                <div className="welcomeImage">
                    <img src={image} alt="" />
                </div>
            </div>
            <div className="slider">
                {arrayImg ? <Loader className='d-flex justify-content-center align-self-center'></Loader> :<Carousel imgSlides={arrayImg} />}
            </div>
            <h1 className='lastNewsh1'>Últimas Novedades</h1>
            <div className="news">
                {news.map(singleNews => {
                    return (
                        <div className="singleFeature">
                            <img src={singleNews.image} alt="" />
                            <div className="content">
                                <p>{singleNews.content}</p>
                                <button className="btn btn.primary">Ver Novedad</button>
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home