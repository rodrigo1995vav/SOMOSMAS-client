import React from 'react'
// import logo from "./LOGO-SOMOS MAS.png";


function Footer() {
  return (
    <div style={{ backgroundColor: "#c0c0c0" }} className="mt-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12 col-md-8 ml-auto mr-auto">
            <div className="brand text-center ">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-xl-12"> <hr className='opacity-100' style={{width:500, marginLeft:0, marginTop:50}} /><hr className='opacity-100' style={{width:500, marginLeft:1050, marginTop:0}} />
                 <img
                      className="img-fluid"
                      style={{ width: 200, height: 200, marginTop: -100 }}  
                      src={'logo'}
                    /> 
                     
                  </div>
                </div>
              </div>

              <div className="container-fluid">
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
              <div className="container-fluid">
                <div className="row  pt-5">
                  <div className="col-lg-12 text-center ">
                    <a href="www.facebook.com">
                      <i
                        className="bi bi-facebook pe-3"
                        style={{ fontSize: 25, color: "black" }}
                      ></i>
                    </a>
                    <a href="#">
                      <i
                        className="bi bi-twitter pe-3"
                        style={{ fontSize: 25, color: "black" }}
                      ></i>
                    </a>
                    <a href="#">
                      <i
                        class="bi bi-linkedin pe-3"
                        style={{ fontSize: 25, color: "black" }}
                      ></i>
                    </a>
                    <a href="#">
                      <i
                        class="bi bi-instagram pe-3"
                        style={{ fontSize: 25, color: "black" }}
                      ></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="container-fluid" >
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