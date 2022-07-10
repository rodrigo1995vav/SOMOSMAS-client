import Carousel from '../../components/Carousel'
import { useEffect, useState } from 'react'
import { Loader } from '../../components/Loader'
import '../../styles/index.scss'


function Home() {

    //Hardcoded variables
    const hcWelcomeMessage = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est ipsum placeat natus! A quam porro possimus. Optio harum cupiditate rem dolore itaque. Tempora quae dignissimos excepturi sunt nostrum sint accusantium."
    const hcFeatures = [{ title: "feature 0", content: "feature 0 body", image: 'Manos 10.jpg' }, { title: "feature 1", content: "feature 1 body", image: 'Manos 10.jpg' }, { title: "feature 2", content: "feature 2 body", image: 'Manos 10.jpg' }, { title: "feature 3", content: "feature 3 body", image: 'Manos 10.jpg' }, { title: "feature 4", content: "feature 4 body", image: 'Manos 10.jpg' }]
    const hcImage = 'Manos 10.jpg'
    const arrayImg = [
        { imageUrl: 'Manos 10.jpg', text: 'text-1' }
    ];

    const [welcomeMessage, setWelcomeMessage] = useState("");
    const [news, setFeatures] = useState([])
    const [image, setImage] = useState("")

    useEffect(() => {
        setWelcomeMessage(hcWelcomeMessage)
        setFeatures(hcFeatures.slice(hcFeatures.length - 3).reverse())
        setImage(hcImage)
    }, []);

    return (
        <div className="container mt-5">
            <div className='homePage'>
                <div className='d-flex flex-column flex-lg-row'>

                    <div>
                        <div className="welcomeMessage">
                            <h1>Hola! Bienvenidx</h1>
                            <p>
                                {welcomeMessage}
                            </p>
                            <button className="btn">Contactanos</button>
                        </div>
                    </div>
                    <div>
                        <div className="welcomeImage">
                            <img src={image} alt="" />
                        </div>
                    </div>

                </div>
                <div className=' my-5 container-fluid d-flex flex-row justify-content-between align-items-center' >
                <h1 className=''>Últimas Novedades</h1>
                <a className='fs-4' href="/novedades">Ver todas</a>
                </div>
                <div >
                    {!arrayImg ? <Loader className='d-flex justify-content-center align-self-center'></Loader> : <Carousel imgSlides={arrayImg} />}
                </div>
               
            </div>
        </div>
    )
}

export default Home