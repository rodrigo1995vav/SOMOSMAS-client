import { useEffect, useState } from 'react'
import '../../styles/index.scss'
import './home.css'

function Home() {

    //Hardcoded variables
    const hcWelcomeMessage = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est ipsum placeat natus! A quam porro possimus. Optio harum cupiditate rem dolore itaque. Tempora quae dignissimos excepturi sunt nostrum sint accusantium."
    const hcFeatures = [{ title: "feature 0", body: "feature 0 body" }, { title: "feature 1", body: "feature 1 body" }, { title: "feature 2", body: "feature 2 body" }, { title: "feature 3", body: "feature 3 body" }, { title: "feature 4", body: "feature 4 body" }]

    const [welcomeMessage, setWelcomeMessage] = useState("");
    const [features, setFeatures] = useState([])

    useEffect(() => {
        setWelcomeMessage(hcWelcomeMessage)
        setFeatures(hcFeatures.slice(hcFeatures.length-4).reverse())
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
                    <img src='Manos 10.jpg' alt="" />
                </div>
            </div>
            <div className="slider">
                slider component
            </div>
            <div className="features">
                {features.map(feature => {
                    return (
                        <div className="singleFeature">
                            <h1>{feature.title}</h1>
                            <p>{feature.body}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home