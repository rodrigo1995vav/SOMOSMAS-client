import { useEffect } from "react";
import { contactUs } from './index';
import { useDispatch, useSelector } from "react-redux";
export default function TestContact() {
    const dispatch = useDispatch()
    const { response } = useSelector(state => state.contact)
    console.log(response)
    useEffect(() => {
        dispatch(contactUs({ email: 'marcosweis@gmail.com', fullName: 'Marcos Weis', message: "este es un mensaje de prueba" }))
    }, [])
    return (<h1>Prueba</h1>);
}

