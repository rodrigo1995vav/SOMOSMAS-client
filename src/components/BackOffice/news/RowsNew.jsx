import Alert from "../../../services/AlertService";
import { putPrivate } from "../../../services/apiServices";

function RowsNew({
    id,
    name,
    avatar,
    createdAt }) {


        const deleteNews = (newsId) =>{
            const requestDelete = putPrivate('delete endpoint')
            Alert.confirmRequest({title:`¿Desea eliminar a ${name}?`}, 
                                 requestDelete, 
                                ()=> Alert.success({title:'Novedad eliminada'}))
        }
    return (
        <tr >
            <td className="col-3 text-center h4 " style={{paddingTop:'35px'}}>{name}</td>
            <td className="col-3 text-center "><img src={avatar} alt="avatar"  width='80'/></td>
            <td className="col-3 text-center h4 "  style={{paddingTop:'35px'}}>{createdAt}</td>

            <td className="col-3 text-center h4 "  style={{paddingTop:'35px'}}>
                <div className="d-flex d-flex justify-content-center ">

                <button className="btn btn-primary mx-1 display-1 ">
                    <i class="bi bi-pencil-fill h3"></i>
                    Editar
                    </button>
                <button className="btn btn-danger mx-1 display-1">
                    <i class="bi bi-trash3 h3"></i>
                    Eliminar
                    </button>
                </div>
            </td>
        </tr>
    );
}

export default RowsNew;