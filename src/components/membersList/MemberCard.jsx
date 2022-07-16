export default function MemberCard({member, altImage}) {
    return ( 
    <div className="card ms-3 mt-3 p-3 mb-5 rounded" id="cardMember" style={{width: "18rem"}}>
    <img src={`${member.image}`} class="card-img-top" alt={`${altImage}`}/>
    <section className="card-body">
     <h4 className="card-text">{member.name}</h4>
    </section>
  </div> );
}

