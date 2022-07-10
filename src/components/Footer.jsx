import React from 'react'
// import logo from "./LOGO-SOMOS MAS.png";


function Footer() {

  const footerLinks = [{name:'Inicio', to: '/'},
                        {name:'Novedades', to: '/novedades'},
                        {name:'Nosotros', to: '/nosotros'},
                        {name:'Contacto', to: '/contacto'},
                        {name:'Contribuye', to: '/contribuye'},]
  
  const socialNetworks = [{icon:"bi bi-facebook pe-3" , link:'#' },
                          {icon:"bi bi-twitter pe-3" , link:'#' },
                          {icon:"bi bi-linkedin pe-3" , link:'#' },
                          {icon:"bi bi-instagram pe-3" , link:'#' }]



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
                    <ul className="nav justify-content-center  ">
                      {footerLinks.map(link => <li key={`footer/${link.name}`} className="nav-item ">
                        <a className="nav-link fs-3 text-black" href={link.to}>
                          {link.name}
                        </a>
                      </li>)}
                    
                    </ul>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="text-black border-5 opacity-100" ></hr>
              <div className="container-fluid">
                <div className="row  pt-5">
                  <div className="col-lg-12 text-center ">
                    {socialNetworks.map((socialNetwork)=><a key={socialNetwork.link} href={socialNetwork.link}>
                      <i
                        className={socialNetwork.icon}
                        style={{ fontSize: 25, color: "black" }}
                      ></i>
                    </a>)}
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