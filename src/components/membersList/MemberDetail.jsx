export default function MemberDetail({ member, selectMember }) {
    const currentMember = selectMember ? selectMember : member
    console.log(currentMember, 'currentMember')
    return (
        <div className="containerComponentDetailMember">
            <h1 className="text-center pt-5 pb-5"><strong>¡Nuestro staff!</strong></h1>
            <div className="containerMemberDetail ">
                <section>
                    <h3 className="fs-2 pb-2"><strong>Roberto Martinez</strong></h3>
                    <h4 className="fs-2 pb-2">Rol que desempeña</h4>
                    <p className="fs-3 p-3">{'Texto con descripcion de la persona y rol que desempeñaTexto con descripcion de la persona y rol que desempeñaTexto con descripcion de la persona y rol que desempeñaTexto con descripcion de la persona y rol que desempeñaTexto con descripcion de la persona y rol que desempeñaTexto con descripcion de la persona y rol que desempeñaTexto con descripcion de la persona y rol que desempeñaTexto con descripcion de la persona y rol que desempeña'}</p>
                    <button type="button" class="btn bg-danger fs-2 mt-3 mb-3 text-light ">¡Quiero ser parte!</button>
                </section>

                <div className="containerImgMemberDetail">
                    <img src={`https://reqres.in/img/faces/5-image.jpg`} className='renderImgMember' style={{ borderRadius: '2rem' }} alt="image member" />
                </div>
            </div>
        </div>
    );
}