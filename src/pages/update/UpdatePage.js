import React, { useState } from 'react'

import UpdateUser from '../../components/update/UpdateUser'
import UpdateAdmin from '../../components/update/UpdateAdmin'

export default function UpdatePage() {
    const [user, setUser] = useState('admin')

    // if (donde sea que se encuentre almacenado el usuario){
    //     setUser(tipoDeUsuario)
    // }

  return (
    <>
        <section className="container login">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-6">
                    <section className='login__content-form mt-4'>
                        <UpdateUser user={user}/>
                    </section>
                </div>
            </div>
        </section>
    </>
  )
}