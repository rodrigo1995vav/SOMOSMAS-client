

const RowsNew = ({
    id,
    name,
    image,
    createdAt,
    deleteNews,
    content,
    type,
    setShowAMForm,
    setNewData }) => {

    const date = new Date(createdAt);
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    return (
        <tr>
            <td className="col-3 text-center h4 " style={{ paddingTop: '35px' }}>{name}</td>
            <td className="col-3 text-center "><img src={`${process.env.REACT_APP_PUBLIC_URL_API}/activity/image/${image}`} alt="avatar" width='80' /></td>
            <td className="col-3 text-center h4 " style={{ paddingTop: '35px' }}>{createdAt}</td>

            <td className="col-3 text-center h4 " style={{ paddingTop: '35px' }}>
                <div className="d-flex d-flex justify-content-center ">

                    <button onClick={() => {setNewData({ id: id, name: name, image: image, content: content, type: type }); setShowAMForm(true) }} className="btn btn-light text-white mx-1 display-1 ">
                        <i class="bi bi-pencil-fill h3"></i>
                        Editar
                    </button>
                    <button onClick={() => deleteNews()} className="btn btn-primary text-white mx-1 display-1">
                        <i class="bi bi-trash3 h3"></i>
                        Eliminar
                    </button>
                </div>
            </td>
        </tr>
    );
}

export default RowsNew;