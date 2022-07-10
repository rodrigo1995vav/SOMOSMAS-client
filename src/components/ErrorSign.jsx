const ErrorSign = ({error}) =>{

    return( <div className="bg-primary text-white alert alert-danger p-5 text-start" role="alert">
                <h4 className="alert-heading fs-1 ">Error</h4>
                 <p className='fs-3'>{error.message}</p>
            </div>)
}

export default ErrorSign