import React from "react";
import { useState } from "react";
import logo from "../../img/Navbar/LOGO-SOMOS-MAS.png";
import Menu from "./Menu";
export default function Navbar() {
    const menu = {
        route: "",
        menu: [
            "Inicio",
            "Nosotros",
            "Novedades",
            "Testimonios",
            "Contacto",
            "Contribuye",
        ]
    };
    return (
        <section>
            <nav className="navbar navbar-expand-lg p-3 border-bottom container_navbar ">
                <div className="container-fluid">
                    <a className="navbar-brand mx-2" href="">
                        <img
                            src={logo}
                            alt="Logo ong"
                            width={"40px"}
                            style={{ transform: "scale(2.2)" }}
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
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse  justify-content-end"
                        id="navbarSupportedContent"
                    >
                        <div className="">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                                {menu.length > 0 &&
                                    menu.map((section) => <Menu section={section} />)}
                            </ul>
                        </div>
                        <div className="justify-content-end">
                            <button
                                className="btn text-dark rounded-pill border border-dark mx-3"
                                type="submit"
                                style={{ transform: "scale(1.2)" }}
                            >
                                Login in
                            </button>
                            <button
                                className="btn btn-danger mx-3  rounded-pill"
                                type="submit"
                                style={{ transform: "scale(1.2)" }}
                            >
                                Registrate
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
}
