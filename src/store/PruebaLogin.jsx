import { useEffect } from "react";
import { login } from "./slices/users";
import { useDispatch, useSelector } from "react-redux";
export default function Prueba() {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.userLogged)
    console.log(user)
    useEffect(() => {
        dispatch(login({ email: 'marcosweis@gmail.com', password: '12345678' }))
    }, [])
    return (<h1>Prueba</h1>);
}

