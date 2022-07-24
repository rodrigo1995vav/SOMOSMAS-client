
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
        <div >
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
                    className="btn btn-primary text-white px-4 py-2 fs-4"
                    onClick={ () => setInitiateForm({ opened: true, initialValues: null }) }
                >
                    Agregar categoría
                </button>
            </div>
            <table 
                className="table table-dark" 
                style={ { pointerEvents:`${ initiateForm.opened ? 'none': 'unset' }` } }
            >
                <thead >
                    <tr>
                        <th scope="col" className="text-center h2">Categoría</th>
                        <th scope="col" className="text-center h2">Acciones</th>
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

