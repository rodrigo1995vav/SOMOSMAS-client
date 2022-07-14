
import RowsCategories from "./RowsCategories";
export default function TableCategories({ categories }) {

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
                            (<RowsCategories key={category.id} category={category} />))
                        }
                    </tbody>
                    ) : <th colSpan={2}> <h2 className="text-dark text-center pt-5 " >No hay categorías</h2> </th>)
                }
            </table>

        </div>
    );
}

