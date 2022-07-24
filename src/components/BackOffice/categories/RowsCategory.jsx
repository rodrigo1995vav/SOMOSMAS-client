
export default function RowsCategory({ category, handlerDeleteCategory, setInitiateForm}) {

    const handleOpenForm = () => {
        setInitiateForm( ({ opened }) => ({
            opened: !opened,
            initialValues:{
                name: category.name,
                description: category.description,
                id: category.id
            }
        }) )
    }

    //each activity is an activity object with name and id properties
    return (
        <>
            <tr >
                <td className="col-3 text-center h4 " style={{ paddingTop: '35px' }}>{category.name}</td>
                <td className="col-3 text-center h4 " style={{ paddingTop: '35px' }}>
                    <div className="d-flex d-flex justify-content-center ">
                        <button 
                            className="btn btn-primary mx-3 display-1"  
                            onClick={ handleOpenForm }
                        >
                            <i class="bi bi-pencil-square h3" ></i>
                        </button>
                        <button className="btn btn-danger mx-3 display-1" onClick={() => handlerDeleteCategory(category.id, category.name)}>
                            <i class="bi bi-trash3 h3"></i>
                        </button>
                    </div>
                </td>
            </tr>
        </>
    );
}

