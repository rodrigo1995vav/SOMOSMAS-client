import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'
import RowsNew from "./RowsNew";
function TableNew() {
    const [news, setNews] = useState([]);
    console.log(news)
    async function getNews() {
        const { data } = await axios.get('https://reqres.in/api/users?page=1')
        setNews(data.data)
    }
    useEffect(() => {
        getNews()
    }, [])
    return (
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
                {news.length > 0 && news.map(({ first_name, avatar, id }) => 
                (<RowsNew key={id} name={first_name} avatar={avatar} createdAt={'2022-06-27'} />))
                }
            </tbody>
        </table>
    );
}

export default TableNew;