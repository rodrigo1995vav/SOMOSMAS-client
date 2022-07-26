import React from 'react'
import { LoginForm } from '../../components/login/LoginForm'
import teamWorkImage from '../../img/Login/team-work.jpg'
export const LoginPage = () => {

  const imgStyles = {
    objectFit:'cover',
    objectPosition:'centered',
    overflow:'hidden',
    height:`100%`
  }



  return (
    <main className='d-flex flex-column flex-lg-row justify-content-center align-items-center w-100' style={{height:'fit-content'}}>
        <section className="d-flex flex-column  align-items-center justify-content-center w-100" style={{height:'72vh'}} >
                    <div className="w-75 m-auto " >
                        <p className='fs-4'>Bienvenido</p>
                        <h2 className='fs-1'>Inicia sesión en tu cuenta!</h2>
                        <LoginForm />
                    </div>
                    <div className='d-flex flex-row justify-content-center gap-2 w-75'>
                        <p className='fs-3'>¿No tienes una cuenta?</p>
                        <a href="/registrarse" className="fs-3 ">Registrate</a>
                    </div>
        </section>
        <section className='w-100 d-flex flex-column flex-lg-row justify-content-center align-items-center' style={{height:'72vh'}}>
            <img className='img-fluid w-100' style={imgStyles} src={teamWorkImage}  alt="team-work" />
        </section>
    </main>
  )
}