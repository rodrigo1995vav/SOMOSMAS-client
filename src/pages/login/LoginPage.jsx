import React from 'react'
import { LoginForm } from '../../components/login/LoginForm'

export const LoginPage = () => {





  return (
    <>
        <section className="container login">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-6">
                    <header className='login__content-welcome'>
                        <p className='login__content-firstline'>Bienvenido</p>
                        <h2>Inicia sesión en tu cuenta!</h2>
                    </header>
                    
                    <section className='login__content-form mt-4'>
                      <LoginForm />
                    </section>

                    <section className='login__content-footer mt-5'>
                        <p>¿No tienes una cuenta?  
                            <a href="/registro" className="link">
                                Registrate
                            </a>
                        </p>
                    </section>
                </div>
            </div>
        </section>
    </>
  )
}