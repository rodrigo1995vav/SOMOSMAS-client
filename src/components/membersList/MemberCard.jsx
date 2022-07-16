export default function MemberCard({member, altImage}) {
    return ( 
    <div class="card" style="width: 18rem;">
    <img src={`"${member.image}`} class="card-img-top" alt={`${altImage}`}/>
    <div class="card-body">
     <h4>{member.name}</h4>
    </div>
  </div> );
}

