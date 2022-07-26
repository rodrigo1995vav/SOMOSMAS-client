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
                    <button type="button" className="btn btn-primary p-4 py-2 fs-2 mt-3 mb-3 text-white"
                     onClick={() => navigate('/contacto')}
                     style={{borderRadius:'.9rem'}}>¡Quiero ser parte!</button>
                </section>

                <div className="containerImgMemberDetail">
                    <img src={`${process.env.REACT_APP_PUBLIC_URL_API}/activity/image/${currentMember.image}`} className='renderImgMember' style={{ borderRadius: '2rem', width:'30rem', height:'30rem', objectFit:'cover',objectPosition:'center' }} alt="image member" />
                </div>
            </div>
        </div>
    );
}