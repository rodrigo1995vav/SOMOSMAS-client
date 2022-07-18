import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../img/Navbar/LOGO-SOMOS-MAS.png";
import { selectUser, logout } from "../../store/slices/users";
import Menu from "./Menu";
export default function Navbar() {

    useSelector(selectUser);
    const navigate = useNavigate()
    const userLogged = useSelector(selectUser);
    const dispatch = useDispatch()
    const menu = {
        route: "",
        menu: [
            {
                text: "Inicio",
                link: '/'
            },
            {
                text: "Nosotros",
                link: '/nosotros'
            },
            {
                text: "Novedades",
                link: '/novedades'
            },
            {
                text: "Testimonios",
                link: '/testimonios'
            },
            {
                text: "Contacto",
                link: 'contacto'
            },
            {
                text: "Contribuye",
                link: '/contribuye'
            }
        ]
    };
    return (
        <section className="sticky-top" style={{ backgroundColor: '#EAEBF3' }} >
            <nav className="navbar navbar-expand-lg p-3 border-bottom container container_navbar ">
                <div className="container-fluid">
                    <a className="navbar-brand mx-2" href="#">
                        <img
                            src={logo}
                            alt="Logo ong"
                            width={"40px"}
                            style={{ transform: "scale(2.2)", paddingLeft:"10%" }}
                        />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="bi bi-list"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse  justify-content-end"
                        id="navbarSupportedContent"
                    >
                        <div className="d-flex">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                                {menu.menu.length > 0 &&
                                    menu.menu.map((section) => <Menu key={section.text} {...section} />)}
                            </ul>
                        </div>
                        <div className=" ">

                            {
                                userLogged ?
                                
                                <>
                                {" "}
                                <button
                                  className="btn text-dark rounded-pill border border-dark mx-3"
                                  type="submit"
                                  style={{ transform: "scale(1.2)" }}
                                  onClick={() => {
                                      navigate("/backoffice");
                                  }}
                                >
                                  Menu de Usuario                    
                                </button>
                                <button
                                  className="btn btn-danger mx-3  rounded-pill"
                                  type="submit"
                                  style={{ transform: "scale(1.2)" }}
                                  onClick={() => {
                                    logout(dispatch);
                                  }}
                                >
                                  Log Out
                                </button>
                              </> :
                                    <>
                                        <button
                                            className="btn text-dark rounded-pill border border-dark mx-3"
                                            type="submit"
                                            style={{ transform: "scale(1.2)" }}
                                            onClick={() => { navigate('/login') }}
                                        >
                                            Log In
                                        </button>
                                        <button
                                            className="btn btn-danger mx-3  rounded-pill"
                                            type="submit"
                                            style={{ transform: "scale(1.2)" }}
                                            onClick={() => { navigate('/registrarse') }}
                                        >
                                            Registrate
                                        </button>
                                    </>

                            }
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );

                          }
//   useSelector(selectUser);
//   const location = useLocation();
//   const navigate = useNavigate();
//   const userLogged = useSelector(selectUser);
//   const dispatch = useDispatch();
//   const menu = {
//     route: "",
//     menu: [
//       {
//         text: "Inicio",
//         link: "/",
//       },
//       {
//         text: "Nosotros",
//         link: "/nosotros",
//       },
//       {
//         text: "Novedades",
//         link: "/novedades",
//       },
//       {
//         text: "Testimonios",
//         link: "/testimonios",
//       },
//       {
//         text: "Contacto",
//         link: "contacto",
//       },
//       {
//         text: "Contribuye",
//         link: "/contribuye",
//       },
//     ],
//   };
//   return (
//     <section className="sticky-top ps-5" style={{ backgroundColor: "#EAEBF3" }}>
//       <nav className="navbar navbar-expand-lg p-3 border-bottom container_navbar ps-5">
//         <div className="container-fluid">
//           <a className="navbar-brand mx-2" href="#">
//             <img
//               src={logo}
//               alt="Logo ong"
//               width={"40px"}
//               style={{ transform: "scale(2.2)" }}
//             />
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="bi bi-list"></span>
//           </button>
//           <div
//             className="collapse navbar-collapse  justify-content-end"
//             id="navbarSupportedContent"
//           >
//             <div className="">
//               <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
//                 {menu.menu.length > 0 &&
//                   menu.menu.map((section) => (
//                     <Menu key={section.text} {...section} />
//                   ))}
//               </ul>
//             </div>
//             <div className="justify-content-end">
//               {userLogged ? (
//                 <>
//                   {" "}
//                   <button
//                     className="btn text-dark rounded-pill border border-dark mx-3"
//                     type="submit"
//                     style={{ transform: "scale(1.2)" }}
//                     onClick={() => {
//                         navigate("/backoffice");
//                     }}
//                   >
//                     Menu de Usuario                    
//                   </button>
//                   <button
//                     className="btn btn-danger mx-3  rounded-pill"
//                     type="submit"
//                     style={{ transform: "scale(1.2)" }}
//                     onClick={() => {
//                       logout(dispatch);
//                     }}
//                   >
//                     Log Out
//                   </button>
//                 </>
//               ) : (
//                 <>
//                   <button
//                     className="btn text-dark rounded-pill border border-dark mx-3"
//                     type="submit"
//                     style={{ transform: "scale(1.2)" }}
//                     onClick={() => {
//                       navigate("/login");
//                     }}
//                   >
//                     Log In
//                   </button>
//                   <button
//                     className="btn btn-danger mx-3  rounded-pill"
//                     type="submit"
//                     style={{ transform: "scale(1.2)" }}
//                     onClick={() => {
//                       navigate("/registrarse");
//                     }}
//                   >
//                     Registrate
//                   </button>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </nav>
//     </section>
//   );
// }
