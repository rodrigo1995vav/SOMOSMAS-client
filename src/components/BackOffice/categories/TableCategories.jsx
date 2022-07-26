
import { useState } from "react";
import Alert from "../../../services/AlertService";
import { deletePrivate } from "../../../services/apiServices";
import { deleteCategory } from "../../../store/slices/categories/getAllCategories";
import CategoriesForm from "../../categories/CategoriesForm";
import RowsCategory from "./RowsCategory";

export default function TableCategories({ dataCategories }) {
    const [categories, setCategories] = useState(dataCategories);
    const [ initiateForm, setInitiateForm ] = useState({
        opened: false,
        initialValues:null
    });

    const handlerDeleteCategory = (id, name) => {
        Alert.confirmRequest({ title: `¿Desea eliminar la categoría ${name}?` },
            () => deletePrivate(`${process.env.REACT_APP_PUBLIC_URL_API}/categories/${id}`),
            () => {
                Alert.success({ title: `La categoría ${name} ha sido eliminada` });
                setCategories(categories.filter((category) => category.id !== id))
            });
    }

    return (
        <div className="mx-5">
            { 
                initiateForm.opened && (
                    <CategoriesForm 
                        initialValues={ initiateForm.initialValues } 
                        selfClose={ setInitiateForm } 
                        setCategories={ setCategories }
                    /> 
                )
            }
            <div style={ 
                { display:'flex',
                  justifyContent:'center', 
                  gap:'1rem', 
                  padding:'1.5rem 0',
                   alignItems:'center' 
                   } 
                }
            >
                <h1 >ABM de Categorias</h1>
                <button 
                    className="btn btn-light text-white px-4 py-3 fs-4"
                    style={{ borderRadius: '6px' }}
                    onClick={ () => setInitiateForm({ opened: true, initialValues: null }) }
                >
                    Agregar categoría
                </button>
            </div>
            <table 
                className="table" 
                style={ { pointerEvents:`${ initiateForm.opened ? 'none': 'unset' }` } }
            >
                <thead >
                    <tr>
                        <th 
                            scope="col" 
                            className="text-start h2"
                            style={{ paddingLeft:'2rem' }}
                        >Categoría</th>
                        <th 
                            scope="col" 
                            className="text-center h2"
                            style={{ paddingRight:'2rem' }}
                        >Acciones</th>
                    </tr>

                </thead>
                {(categories.length > 0 ?
                    (
                        <tbody>
                            {
                                categories.map((category) => (
                                    <RowsCategory 
                                        key={category.id} 
                                        category={category} 
                                        handlerDeleteCategory={handlerDeleteCategory}
                                        setInitiateForm={ setInitiateForm }
                                    />
                                ))
                            }
                        </tbody>

                    ) : <th colSpan={2}> <h2 className="text-dark text-center pt-5 " >No hay categorías</h2> </th>)
                }
            </table>

        </div>
    );
}

