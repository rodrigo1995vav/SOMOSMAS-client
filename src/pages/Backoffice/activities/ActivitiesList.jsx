import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useParams } from "react-router-dom"
import TableActivities from "../../../components/BackOffice/activities/TableActivities"
import { Loader } from "../../../components/Loader"
import Paginator from "../../../components/Paginator"
import { getAllActivities } from "../../../store/slices/activities/getAllActivities"


export default function ActivitiesList() {

    const { activities, loading, error } = useSelector((state) => state.allActivities)

    const dispatch = useDispatch()
    const query = useParams()
    const page = query.page || 1
    const limit = 10;
    let pagesAmount = activities ? Math.ceil(activities.total_activities / limit) : ""



    useEffect(() => {
        dispatch(getAllActivities(page))
    }, [page])
    if (loading) {
        console.log(loading)
        return <Loader />
    }
    console.log(error.errorState)
    if (error.errorState) {
        return <h1>Upss hubo un error!!</h1>
        //hay que hacer errores lindos , tambien tengo el error en el objeto por si las dudas , me parecio correcto no mostrarlo
    }
    //   console.log(activities)
    return (
        <div>

            {activities && <TableActivities activities={activities.activities} />}

            {activities &&
                <Paginator currentPage={page} pageCount={pagesAmount} justify={'center'} ></Paginator>
            }

        </div>);
}

