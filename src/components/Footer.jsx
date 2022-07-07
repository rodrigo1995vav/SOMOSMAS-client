
import logo from '../assets/logo.png'
import useSocialNetworks from '../hooks/useSocialNetworks';

function Footer() {

  const { socialNetworks } = useSocialNetworks();

  return (
    <div className='footer'>
      <div>
        <div>
          <div>
            <div className="brand text-center ">
              <div className="container-fluid ">
                <div className="row footer__top-container" >
                  <hr className='opacity-100 footer__hr-top-basis'/>
                  <hr className='opacity-100 footer__hr-top-basis'  />
                  <img 
                    className='footer__logo'
                    src={logo}
                    alt="logo"
                  /> 
                </div>
              </div>

              <div>
                <div className="row  pt-5">
                  <div className="row-lg-12  py-5 ">
                    <ul class="nav justify-content-center  ">
                      <li class="nav-item ">
                        <a class="nav-link fs-3 text-black" href="#">
                          Inicio
                        </a>
                      </li>
                      <li class="nav-item ">
                        <a class="nav-link fs-3 text-black" href="#">
                          Nosotros
                        </a>
                      </li>
                      <li class="nav-item ">
                        <a class="nav-link fs-3 text-black" href="#">
                          Novedades
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link fs-3 text-black" href="#">
                          Testimonios
                        </a>
                      </li>
                      <li class="nav-item fs-3 ">
                        <a class="nav-link text-black" href="#">
                          Contacto
                        </a>
                      </li>
                      <li class="nav-item fs-3 ">
                        <a class="nav-link text-black" href="#">
                          Contribuye
                        </a>
                      </li>
                    </ul>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="text-black border-5 opacity-100" ></hr>
              <div>
                <div className="row pt-2">
                  <div className="col-lg-12 text-center ">

                    {
                      socialNetworks?.length > 0 && socialNetworks.map( ( social ) => {
                        const { id, link, bootstrapIconName } = social;
                        return(
                          <a href={ link } key={ id } target="_blank">
                            <i className={ `bi ${ bootstrapIconName } footer__social-icons me-3` } />
                          </a>
                        )
                     })
                    }

                  </div>
                </div>
              </div>

              <div className="container-fluid">
                <div className="row pb-5">
                  <div className="col-lg-12">
                    <h4 className="text-center text-black">
                      2022 by Alkemy. All rights reserved.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Footer