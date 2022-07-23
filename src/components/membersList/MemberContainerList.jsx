import MemberCard from "./MemberCard";

export default function MemberContainerList({ members, handlerDescription }) {


    return (

        <div className="d-flex flex-wrap mt-5 pb-2 justify-content-center ">
            {members.map((member) =>
                <MemberCard key={member.id} member={member} altImage={"miembro de la ong"} handlerDescription={handlerDescription}
                />)}
        </div>

    );
}

