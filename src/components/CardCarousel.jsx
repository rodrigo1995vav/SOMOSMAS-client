//PropsTypes:

// Cards = [
//    {card props}
//    ...
//  ]
// cardsPerSlide : amount of cards per slide
// CardComponent : CardType  (the carousel always takes the height of its content)

const CardCarousel = ({ carouselId ,cardsData, cardsPerSlide , CardComponent }) => {




    let slideCount =  Math.trunc(cardsData.length / cardsPerSlide ) 
    cardsData.length % cardsPerSlide > 0 && ( slideCount += 1 )

  
    const carouselIndicators=()=>{
        let buttonArray = []
    for(let i = 0; i<slideCount; i++){
        buttonArray.push(<button
        type="button"
        key={i+1}
        data-bs-target={`#${carouselId}`}
        data-bs-slide-to={i}
        className={
          i === 0 ? "carousel-button active" : "carousel-button"
        }
        aria-current={i === 0 ? "true" : ""}
        aria-label={`Slide ${i + 1}`}
         ></button>)
    }
    return buttonArray
    }
    const carouselCards =(i) =>{

        let carouselCards = []
        let object = {}
        
        for(let j = 0; j<cardsPerSlide; j++){
            for(const key in cardsData[(i*cardsPerSlide)+j]){
            object[key] = cardsData[(i*cardsPerSlide)+j][key] 
            
           }
           if(Object.entries(object).length !==0){
                carouselCards.push(<CardComponent  key={`card${(i*cardsPerSlide)+j}`}  {...object} ></CardComponent>) 
          }
          object = {}
        }
        return carouselCards
       }

   const carouselItems =() =>{

    let carouselItems = []
    

    for(let i = 0; i<slideCount; i++){
   let item =  <div key={`item${i}`} className={i===0?"carousel-item active  "
                                                      :"carousel-item  "}>
        <div className="d-flex flex-column flex-md-row justify-content-around align-items-center">
        {carouselCards(i)}
        </div>
        </div>
    carouselItems.push(item)
    }
    return carouselItems
   }

    return (
      <div
        id={`${carouselId}`}
        className="carousel slide m-3 card-carousel "
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {carouselIndicators()}
        </div>
        <div style={{height:'fit-content'}} className="carousel-inner py-5">
            {carouselItems()}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={`#${carouselId}`}
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={`#${carouselId}`}
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    );
  };
  
  export default CardCarousel;
  