import { useNavigate } from "react-router-dom";
export const BackOffice = () => {
    const navigate = useNavigate();
    return (
        <div className="menu_container">
            <div className="col-md-12 backoffice_card">
                <div>
                    <h4 className="fs-2 mb-4">Novedades</h4>
                    <i className="fa-solid fa-newspaper fa-2xl"></i>
                    <button className="fs-2 px-4" onClick={() => navigate("/backoffice/news/1")}>Ir</button>
                </div>
                <div>
                    <h4 className="fs-2 mb-4">Actividades</h4>
                    <i className="fa-solid fa-list-check fa-2xl"></i>
                    <button className="fs-2 px-4">Ir</button>
                </div>
                <div>
                    <h4 className="fs-2 mb-4">Categorias</h4>
                    <i className="fa-solid fa-rectangle-list fa-2xl"></i>
                    <button className="fs-2 px-4" onClick={() => navigate("/backoffice/categorias/1")}>
                        Ir
                    </button>
                </div>
                <div>
                    <h4 className="fs-2 mb-4">Testimonios</h4>
                    <i className="fa-solid fa-comments fa-2xl"></i>
                    <button className="fs-2 px-4" onClick={() => navigate("/backoffice/testimonials/1")}>Ir</button>
                </div>
            </div>

            <div className="col-md-12 backoffice_card ">
                <div>
                    <h4 className="fs-2 mb-4">Organización</h4>
                    <i class="fa-solid fa-network-wired fa-2xl"></i>
                    <button className="fs-2 px-4">Ir</button>
                </div>
                <div>
                    <h4 className="fs-2 mb-4">Slides</h4>
                    <i class="fa-brands fa-slideshare fa-2xl"></i>
                    <button className="fs-2 px-4">Ir</button>
                </div>
                <div>
                    <h4 className="fs-2 mb-4">Usuarios</h4>
                    <i className="fa-solid fa-users fa-2xl"></i>
                    <button className="fs-2 px-4" onClick={() => navigate("/backoffice/userslist/1")}>
                        Ir
                    </button>
                </div>
                <div>
                    <h4 className="fs-2 mb-4">Miembros</h4>
                    <i className="fa-solid fa-users-line fa-2xl"></i>
                    <button className="fs-2 px-4">Ir</button>
                </div>
            </div>
        </div>
    );
};
