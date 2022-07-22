

const HomeMemberCard = ({name, image}) => {

    return <><div className="bg-black d-none d-md-block m-1 p-0 position-relative shadow" 
                        style={{
                                border:'none',
                                borderRadius: '2rem',
                                overflow:'hidden', 
                                height:'20rem',
                                maxWidth:'20rem' }} >
                <img src={`${image}`} class="" style={{height:'100%',
                                                        width:'100%',
                                                        opacity:'0.7', 
                                                        objectFit:'cover', 
                                                        objectPosition:'center',
                                                        }} alt={`Miembro de la ong`} />

                        <section className=" position-absolute  w-100 text-center" style={{ bottom: '1.5rem' }}>
                                <h4 className="fs-3 text-white" >
                                        <strong>{name}</strong>
                                </h4>
                                <h6 className="fs-4 text-white ">CEO</h6>
                        </section>
                </div>
                <div className="d-flex flex-row gap-5 align-items-center m-1 d-md-none shadow" style={{height:'8rem', width:'90%',borderRadius: '2rem'}}>
                        <div className="bg-black " style={{width:'50%', 
                                                           height:'100%',
                                                           borderRadius: '2rem', 
                                                           objectFit:'cover', 
                                                           objectPosition:'center',}}>

                                <img src={`${image}`} class=" " style={ { height:'100%',
                                                        width:'100%',borderRadius: '2rem', opacity:'0.7', objectFit:'cover',objectPosition:'center' }} alt={`Miembro de la ong`} />
                        </div>
                        <section className=" w-100 h-100 text-start" style={{ width:'60%',bottom: '1.5rem' }}>
                                <h4 className=" fs-3 " >
                                         <strong>{name}</strong>
                                </h4>
                        <h6 className=" fs-4  ">CEO</h6>
                        </section>
                </div>
             </>
}

export default HomeMemberCard

