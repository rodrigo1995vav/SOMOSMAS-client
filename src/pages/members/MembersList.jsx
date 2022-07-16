import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useParams } from "react-router-dom"
import { Loader } from "../../../components/Loader"
import Paginator from "../../../components/Paginator"
import MemberContainerList from "../../components/membersList/MemberContainerList"
import { getAllMembers } from "../../store/slices/members/getAllMembers"



export default function ActivitiesList() {

    const { members, loading, error } = useSelector((state) => state.allMembers)

    const dispatch = useDispatch()
    const query = useParams()
    const page = query.page || 1
    const limit = 10;

    useEffect(() => {
        dispatch(getAllMembers(page))
    }, [page])

    // if (loading) {
    //     console.log(loading)
    //     return <Loader />
    // }

    // if (error.errorState) {
    //     return <h1>Upss hubo un error!!</h1>
    //     //hay que hacer errores lindos , tambien tengo el error en el objeto por si las dudas , me parecio correcto no mostrarlo
    // }

    return (
        <div>

            {members && <MemberContainerList members={members.members} />}

            {members &&
                <Paginator currentPage={page} pageCount={pagesAmount} justify={'center'} ></Paginator>
            }
            { loading &&   <Loader/>}

            {error.errorState   && <h1>Upss hubo un error!!</h1>}

        </div>);
}

