
import UpdateUser from '../../components/update/UpdateUser'

export default function UpdatePage() {

  return (
    <>
        <section className="container login">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-6">
                    <section className='login__content-form mt-4'>
                        <UpdateUser />
                    </section>
                </div>
            </div>
        </section>
    </>
  )
}