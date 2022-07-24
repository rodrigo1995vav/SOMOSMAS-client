
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
            <tr>
                <td 
                    className="col-3  h4 " 
                    style={{ paddingTop: '35px', paddingLeft:'2rem' }}
                >{category.name}</td>
                <td 
                    className="col-3  h4 " 
                    style={{ paddingTop: '35px', paddingRight:'2rem' }}
                >
                    <div className="d-flex d-flexm justify-content-end ">
                        <i 
                            onClick={ handleOpenForm }   
                            style={{color:'#0038FF', cursor:'pointer', marginRight: '1rem'}} 
                            className="bi bi-pencil-square h3" 
                        ></i>

                        <i 
                            class="bi bi-trash3 h3"
                            style={{color:'#ff0000', cursor:'pointer'}}
                            onClick={() => handlerDeleteCategory(category.id, category.name)}
                        ></i>
                    </div>
                </td>
            </tr>
        </>
    );
}

