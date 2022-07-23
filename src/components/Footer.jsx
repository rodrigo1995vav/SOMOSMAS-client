
import { Link } from 'react-router-dom';

import logo from '../assets/logo.png'
import useSocialNetworks from '../hooks/useSocialNetworks';

function Footer() {

  const footerLinks = [
    { name: "Inicio", to: "/" },
    { name: "Novedades", to: "/novedades/1" },
    { name: "Nosotros", to: "/nosotros/1" },
    { name: "Contacto", to: "/contacto" },
    { name: "Contribuye", to: "/contribuye" },
    { name: "Testimonios", to: "/testimonios/1" },
  ];

  const { socialNetworks } = useSocialNetworks();

  return (
    <div className='footer'>
      <div>
        <div>
          <div>
            <div className="brand text-center ">
              <div className="container-fluid ">
                <div className="footer__top-container" >
                  <hr className='opacity-100 footer__hr-top-basis'/>
                  <img 
                    className='footer__logo'
                    src={logo}
                    alt="logo"
                  /> 
                  <hr className='opacity-100 footer__hr-top-basis'  />
                  
                </div>
              </div>

              <div>
                <div className="">
                  <div className="col-lg-12 mt-3">
                    <ul className="nav justify-content-center  ">
                        {footerLinks.map((link) => (
                          <li key={`footer/${link.name}`} className="nav-item ">
                            <Link
                              className="nav-link fs-4 text-black"
                              to={link.to}
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="text-black border-5 opacity-100" ></hr>
              <div>
                <div className="">
                  <div className="col-lg-12 text-center mt-3 ">

                    {
                      socialNetworks?.length > 0 && socialNetworks.map( ( social ) => {
                        const { id, link, bootstrapIconName } = social;
                        return(
                          <a href={ link } key={ id } target="_blank" rel="noreferrer">
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