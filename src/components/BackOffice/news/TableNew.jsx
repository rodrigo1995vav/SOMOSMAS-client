import { useEffect } from "react";
import { useState } from "react";
import Alert from "../../../services/AlertService";
import { getPublic , deletePrivate} from '../../../services/apiServices'
import NewsForm from "../../newsForm/NewsForm";
import RowsNew from "./RowsNew";

function TableNew() {
    const [news, setNews] = useState([]);
    console.log(news)
    async function getNews() {
        const { data } = await getPublic('/news')
        setNews(data.entries)
    }

const deleteNews = (id,name) => {
    Alert.confirmRequest({title: `¿Desea eliminar la novedad ${name}?`},
    ()=>deletePrivate(`/news/${id}`),
    ()=>{Alert.success({ title:'La novedad ha sido eliminada'}); setNews(news.filter((entry)=>entry.id !== id))})
}

    useEffect(() => {
        getNews()
    }, [])
    return (
        <div>
        <div className="d-flex gap-5 justify-content-center ">
            <div className="align-self-center">
                <h1 className="p-3 ">
                    ABM de novedades
                </h1>
            </div>
            <div className="p-3 ">
                <button className="btn btn-primary p-3 ">Agregar novedad</button>
            </div>            
        </div>   
            <NewsForm/>
        <table class="table table-dark">
            <thead>
                <tr>
                    <th scope="col" className="text-center h2">Nombre</th>
                    <th scope="col" className="text-center h2">Imagen</th>
                    <th scope="col" className="text-center h2">Fecha</th>
                    <th scope="col" className="text-center h2">Opciones</th>
                </tr>
            </thead>
            <tbody>
                {news.length > 0 && news.map(({ name, image, id, createdAt }) => 
                (<RowsNew key={id} name={name} image={image} createdAt={createdAt} deleteNews = {()=>{deleteNews(id,name)}} />))
                }
            </tbody>
        </table>
        </div>
    );
}

export default TableNew;