

const RowsNew = ({
    name,
    image,
    createdAt, 
    deleteNews }) => {

    return (
        <tr >
<<<<<<< HEAD
            <td className="col-3 text-center h4 " style={{ paddingTop: '35px' }}>{name}</td>
            <td className="col-3 text-center "><img src={avatar} alt="avatar" width='80' /></td>
            <td className="col-3 text-center h4 " style={{ paddingTop: '35px' }}>{createdAt}</td>
=======
            <td className="col-3 text-center h4 " style={{paddingTop:'35px'}}>{name}</td>
            <td className="col-3 text-center "><img src={image} alt="avatar"  width='80'/></td>
            <td className="col-3 text-center h4 "  style={{paddingTop:'35px'}}>{createdAt}</td>
>>>>>>> 8481696ac7bdecf438da1e369eaa9bf4efda291a

            <td className="col-3 text-center h4 " style={{ paddingTop: '35px' }}>
                <div className="d-flex d-flex justify-content-center ">

<<<<<<< HEAD
                    <button className="btn btn-primary mx-1 display-1 ">
                        <i class="bi bi-pencil-square h3" ></i>
                        Editar
                    </button>
                    <button className="btn btn-danger mx-1 display-1">
                        <i class="bi bi-trash3 h3"></i>
                        Eliminar
=======
                <button onClick={()=>{console.log('open edit form')}} className="btn btn-light mx-1 display-1 ">
                    <i class="bi bi-pencil-fill h3"></i>
                    Editar
                    </button>
                <button onClick={()=>deleteNews()} className="btn btn-danger mx-1 display-1">
                    <i class="bi bi-trash3 h3"></i>
                    Eliminar
>>>>>>> 8481696ac7bdecf438da1e369eaa9bf4efda291a
                    </button>
                </div>
            </td>
        </tr>
    );
}

export default RowsNew;