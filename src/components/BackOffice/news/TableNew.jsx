import { useEffect } from "react";
import { useState } from "react";
import { getPublic } from "../../../services/apiServices";

import RowsNew from "./RowsNew";

function TableNew() {
    const [data,setData] = useState(null)
    const [error,setError] = useState(false)
    const [loading,setLoading] = useState(true)
    
    useEffect(() => {
            getPublic(`/news`)
            .then(res=>setData(res.data))
            .catch(err=>setError(err))
            .finally(()=>{setLoading(false)})
    }, [])
    return (
        <table className="table table-dark">
            <thead>
                <tr>
                    <th scope="col" className="text-center h2">Título</th>
                    <th scope="col" className="text-center h2">Imagen</th>
                    <th scope="col" className="text-center h2">Fecha</th>
                    <th scope="col" className="text-center h2">Opciones</th>
                </tr>
            </thead>
            <tbody>
                {data && data.map((news) => 
                (<RowsNew key={news.id} name={news.name} avatar={news.image} createdAt={news.createdAt} />))
                }
            </tbody>
        </table>
    );
}

export default TableNew;