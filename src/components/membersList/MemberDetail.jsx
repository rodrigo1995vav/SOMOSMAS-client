import { useNavigate } from "react-router-dom";


export default function MemberDetail({ member, selectMember }) {
    const navigate = useNavigate()
    const currentMember = selectMember ? selectMember : member
    return (
        <div className="containerComponentDetailMember">
            <h1 className="text-center pt-5 pb-5"><strong>¡Nuestro staff!</strong></h1>
            <div className="containerMemberDetail ">
                <section className="p-2">
                    <h3 className="fs-2 "><strong>{currentMember.name}</strong></h3>
                    <h4 className="fs-2 ">{currentMember.Role_ong.role_ong}</h4>
                    <p className="fs-3 ">{currentMember.description}</p>
                    <button type="button" class="btn bg-danger fs-2 mt-3 mb-3 text-light" onClick={() => navigate('/contacto')}>¡Quiero ser parte!</button>
                </section>

                <div className="containerImgMemberDetail">
                    <img src={currentMember.image} className='renderImgMember' style={{ borderRadius: '2rem' }} alt="image member" />
                </div>
            </div>
        </div>
    );
}