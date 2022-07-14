
import RowsActivities from "./RowsActivities";
export default function TableActivities({ activities }) {

    return (
        <div>
            <table class="table table-dark">
                <thead >
                    <tr>
                        <th scope="col" className="text-center h2">Actividad</th>
                        <th scope="col" className="text-center h2">Acciones</th>
                    </tr>

                </thead>
                {(activities.length > 0 ?
                    (<tbody>
                        {activities.map((activity) =>
                            (<RowsActivities key={activity.id} activity={activity} />))
                        }
                    </tbody>
                    ) : <th colSpan={2}> <h2 className="text-dark text-center pt-5 " >No hay actividades</h2> </th>)
                }
            </table>

        </div>
    );
}

