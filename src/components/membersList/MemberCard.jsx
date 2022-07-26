export default function MemberCard({ member, altImage, handlerDescription }) {
    return (
        <div className="card mx-4 mt-3  mb-5 position-relative shadowCardMember" style={{ width: "20rem", height:'20rem', borderRadius: '2rem' }} onClick={() => handlerDescription(member.id)}>
            <img src={`${process.env.REACT_APP_PUBLIC_URL_API}/activity/image/${member.image}`} className="card-img-top " height={'100%'} style={{ borderRadius: '2rem', objectFit:'cover', objectPosition:'center' }} alt={`${altImage}`} />
            <section className="card-body position-absolute  w-100 text-center" style={{ bottom: '1.5rem' }}>
                <h4 className="card-text fs-3 text-white shadowTextMember" >
                    <strong>{member.name}</strong>
                </h4>
                <h6 className="card-text fs-4 text-white shadowTextMember">{member.Role_ong.role_ong}</h6>
            </section>
        </div>);
}

