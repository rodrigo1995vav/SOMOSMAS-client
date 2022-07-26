import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Alert from "../../../services/AlertService";
import { getPublic, deletePrivate } from "../../../services/apiServices";
import NewsForm from "../../newsForm/NewsForm";
import Paginator from "../../Paginator";
import EditAddNewFormModal from "./EditAddNewFormModal";
import RowsNew from "./RowsNew";

function TableNew() {

    const [news, setNews] = useState({result:[]});
    const [showAMForm, setShowAMForm] = useState(false);
    const [newData, setNewData] = useState({})
    const  { page }  = useParams()
    const  limit = 10
    async function getNews() {
        const { data } = await getPublic(`/news/${limit}/${page}`);
        setNews(data.entries);
    }

    const deleteNews = (id, name) => {
        Alert.confirmRequest(
            { title: `¿Desea eliminar la novedad ${name}?` },
            () => deletePrivate(`/news/${id}`),
            () => {
                Alert.success({ title: "La novedad ha sido eliminada" });
                setNews({...news, result: news.result.filter((entry) => entry.id !== id)});
            }
        );
    };

    useEffect(() => {
        getNews();
    }, [page]);
    return (
   
        <div className="h-auto">
            {showAMForm && <EditAddNewFormModal newData={newData} setShowAMForm={setShowAMForm} getNews={getNews}/>}
            <div className="d-flex gap-5 justify-content-center ">
                <div className="align-self-center">
                    <h1 className="p-3 ">ABM de novedades</h1>
                </div>
                <div className="p-3">
                    <button
                        className="btn btn-light text-white fs-3 p-3"
                        style={{borderRadius:'.9rem'}}
                        onClick={() => { setNewData();setShowAMForm(true)}}
                    >
                        Agregar novedad
                    </button>
                </div>
            </div>

            <table class="table ">
                <thead>
                    <tr>
                        <th scope="col" className="text-center h2">
                            Nombre
                        </th>
                        <th scope="col" className="text-center h2">
                            Imagen
                        </th>
                        <th scope="col" className="text-center h2">
                            Fecha
                        </th>
                        <th scope="col" className="text-center h2">
                            Acciones
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {news.result.length > 0 &&
                        news.result.map(({ name, image, content, type, id, createdAt }) => (
                            <RowsNew
                                key={id}
                                id={id}
                                name={name}
                                image={image}
                                createdAt={createdAt}
                                content={content}
                                type={type}
                                deleteNews={() => {
                                    deleteNews(id, name);

                                }}
                                setShowAMForm={setShowAMForm}
                                setNewData={setNewData}

                            />
                        ))}
                </tbody>
            </table>
            <Paginator currentPage={page} pageCount={news.pages}></Paginator>
        </div>
        
     
    );
}

export default TableNew;
