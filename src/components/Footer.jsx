import React from 'react'
import logo from '../assets/logo.png'



function Footer() {
  return (
    <div className='footer' >
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
                    <a href="www.facebook.com">
                      <i
                        className="bi bi-facebook me-3 footer__social-icons"
                      ></i>
                    </a>
                    <a href="#">
                      <i
                        className="bi bi-twitter me-3 footer__social-icons"
                      ></i>
                    </a>
                    <a href="#">
                      <i
                        class="bi bi-linkedin me-3 footer__social-icons"
                      ></i>
                    </a>
                    <a href="#">
                      <i
                        class="bi bi-instagram me-3 footer__social-icons"
                      ></i>
                    </a>
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