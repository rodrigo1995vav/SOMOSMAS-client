import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllActivities } from "../../../store/slices/activities/getAllActivities";
import { Loader } from "../../Loader";
import RowsActivities from "./RowsActivities";
export default function TableActivities() {
    const [{activities, total_activities},{loader}] = useSelector((state) => [state.allActivities,state.loader])   

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllActivities(1))
    }, [])
    console.log(activities)
    console.log(loader)
    if(loader){
        return <Loader/>
    }   
    return (
        <div>      
            <table class="table table-dark">
            <thead >
                <tr>
                    <th scope="col" className="text-center h2">Actividad</th>
                    <th scope="col" className="text-center h2">Acciones</th>
                </tr>

            </thead>
                 { loader && total_activities.length > 0 &&  activities != 0 ?
                    (<tbody>
                        {activities.activities.map((activity) =>
                        (<RowsActivities key={activity.id} activity={activity} />))
                        }
                    </tbody>
                    ) : <th colSpan={2}> <h2 className="text-dark text-center pt-5 " >No hay actividades</h2> </th>
                    }
            </table>
                    
        </div>
    );
}

