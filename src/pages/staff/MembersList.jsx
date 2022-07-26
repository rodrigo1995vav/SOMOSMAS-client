import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Loader } from '../../components/Loader'
import Paginator from "../../components/Paginator"
import MemberContainerList from "../../components/membersList/MemberContainerList"
import { getAllMembers } from "../../store/slices/members/getAllMembers"
import MemberDetail from "../../components/membersList/MemberDetail"
import { useState } from "react"



export default function MembersList() {
    const { members, loading, error } = useSelector((state) => state.allMembers)
    const [selectMember, setSelectMember] = useState(null)
    const dispatch = useDispatch()
    const query = useParams()
    const page = query.page || 1
    const limit = 10;

    useEffect(() => {
        dispatch(getAllMembers(page, limit))

    }, [page])

    function handlerDescription(id) {
        setSelectMember(members.members.find(member => member.id == id))
    }

    return (
        <div className="pb-5 w-75 m-auto">

            {members ? <MemberDetail selectMember={selectMember} member={members.members[0]} /> : null}

            {members ? <>
                <MemberContainerList members={members.members} handlerDescription={handlerDescription} />
                <Paginator currentPage={page} pageCount={members.total_pages} justify={'center'} ></Paginator>
            </> : null}

            {loading && <Loader />}

            {error.errorState && <h1>Upss!! hubo un error!!</h1>}

        </div>);
}

