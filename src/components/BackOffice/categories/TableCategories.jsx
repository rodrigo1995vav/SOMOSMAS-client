
import { useEffect } from "react";
import { useState } from "react";
import Alert from "../../../services/AlertService";
import { deletePrivate } from "../../../services/apiServices";
import { deleteCategory } from "../../../store/slices/categories/getAllCategories";
import RowsCategory from "./RowsCategory";

export default function TableCategories({ dataCategories }) {
    const [categories, setCategories] = useState(dataCategories);

    const handlerDeleteCategory = (id, name) => {
        Alert.confirmRequest({ title: `¿Desea eliminar la categoría ${name}?` },
            () => deletePrivate(`${process.env.REACT_APP_PUBLIC_URL_API}/categories/${id}`),
            () => {
                Alert.success({ title: `La categoría ${name} ha sido eliminada` });
                setCategories(categories.filter((category) => category.id !== id))
            });
    }

    return (
        <div>
            <table class="table table-dark">
                <thead >
                    <tr>
                        <th scope="col" className="text-center h2">Categoría</th>
                        <th scope="col" className="text-center h2">Acciones</th>
                    </tr>

                </thead>
                {(categories.length > 0 ?
                    (<tbody>
                        {categories.map((category) =>
                            (<RowsCategory key={category.id} category={category} handlerDeleteCategory={handlerDeleteCategory} />))
                        }
                    </tbody>
                    ) : <th colSpan={2}> <h2 className="text-dark text-center pt-5 " >No hay categorías</h2> </th>)
                }
            </table>

        </div>
    );
}

