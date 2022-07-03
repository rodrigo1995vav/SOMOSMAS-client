import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllActivities } from "../../../store/slices/activities/getAllActivities";
import RowsActivities from "./RowsActivities";
export default function TableActivities() {
    const { activities } = useSelector(state => state.allActivities)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllActivities(1))
    }, [])
    console.log(activities)
    return (
        <div>

            <table class="table table-dark">
                <thead>
                    <tr>
                        <th scope="col" className="text-center h2">Actividad</th>
                        <th scope="col" className="text-center h2">Acciones</th>
                    </tr>

                </thead>
                {activities.activities.length > 0 && activities.total_activities != 0 ? (
                    <tbody>
                        {activities.activities.map((activity) =>
                            (<RowsActivities key={activity.id} name={activity.name} />))
                        }
                    </tbody>
                ) : <h2 className="text-dark text-center pt-5">No hay actividades</h2>}
            </table>
        </div>
    );
}

