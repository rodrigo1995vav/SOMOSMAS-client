import MemberCard from "./MemberCard";

export default function MemberContainerList({members}) {


    return ( 
        <div className="w-100 d-flex flex-wrap pb-2">
           {members.map((member)=> <MemberCard  key={member.id} member={member} altImage={"miembro de la ong"}/>) }
        </div>
     );
}

