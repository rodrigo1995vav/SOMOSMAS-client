
import  SignupForm  from "../../components/SignUpForm/SignUpForm"
import teamWorkImage from '../../img/Login/team-work.jpg'

const RegisterPage = () => {

    const imgStyles = {
        objectFit:'cover',
        objectPosition:'centered',
        overflow:'hidden',
        height:`100%`
      }
    

    return (
        <main className='d-flex flex-column flex-lg-row justify-content-center align-items-center ' style={{height:'fit-content'}}>
            <section className="d-flex flex-column  align-items-center justify-content-center   w-100" style={{height:'72vh'}} >
                        <div className="w-75 m-auto " >
                            <p className='fs-4'>Forma parte</p>
                            <h2 className='fs-1'>Crea tu cuenta!</h2>
                            <SignupForm></SignupForm>
                        </div>
                        <div className='d-flex flex-row justify-content-center gap-2 w-75'>
                            <p className='fs-3'>¿Ya tienes una cuenta?</p>
                            <a href="/login" className="fs-3 ">Inicia sesión</a>
                        </div>
            </section>
            <section className='w-100' style={{height:'72vh'}}>
                <img className='img-fluid' style={imgStyles} src={teamWorkImage}  alt="team-work" />
            </section>
        </main>
      )






}

export default RegisterPage