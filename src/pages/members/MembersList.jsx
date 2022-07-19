import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useParams } from "react-router-dom"
import {Loader}  from '../../components/Loader'
import Paginator from "../../components/Paginator"
import MemberContainerList from "../../components/membersList/MemberContainerList"
import { getAllMembers } from "../../store/slices/members/getAllMembers"



export default function MembersList() {
    const { members, loading, error } = useSelector((state) => state.allMembers)
    const dispatch = useDispatch()
    const query = useParams()
    const page = query.page || 1
    const limit = 16;
    useEffect(() => {
        dispatch(getAllMembers(page,limit))
    }, [page])

    return (
        <div>

            {members ? <>    
            <MemberContainerList members={members.members} />
            <Paginator currentPage={page} pageCount={members.total_pages} justify={'center'} ></Paginator>     
            </> : null}   

            {loading && <Loader/>}

            {error.errorState && <h1>Upss!! hubo un error!!</h1>}

        </div>);
}

