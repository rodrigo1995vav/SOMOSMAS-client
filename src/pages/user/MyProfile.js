import { useState, useEffect } from 'react';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { selectUser, setUserLogged, logout } from "../../store/slices/users";
import EditProfile from './EditProfile'
import axios from "axios";
import { deletePrivate } from '../../services/apiServices';
import Alert from '../../services/AlertService'
const MyProfile = () => {

    // TODO: Once we have the endpoint ready to bring the user we can execute this request to list it here
    // const [user, setUser] = useState(null);

    /*useEffect(() => {
        const getUser = () => {
            fetch("/api/user", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
                .then(res => res.json())
                .then(res => setUser(res));
        }
        getUser();
    }, []);*/
    const token = localStorage.getItem("token");
    const navigate = useNavigate()
    const userLogged = useSelector(selectUser);
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        deletePrivate(`${process.env.REACT_APP_PUBLIC_URL_API}/users/deleteProfile/${id}`).then(() => {
            navigate('/')
            dispatch(logout)
        })
    }


    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");
    const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
        console.log(file)
    };
    const [show, setShow] = useState(false);
    const [editFormData, setEditFormData] = useState({
        firstName: userLogged.user.firstName,
        lastName: userLogged.user.lastName,
        email: userLogged.user.email,
    });
    const handleEditUser = (e, user) => {
        e.preventDefault();
        const formValues = {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            image: file
        };
        console.log(formValues);

        setEditFormData(formValues);
        console.log(editFormData);
    };
    console.log(userLogged.user)
    const handleEditFormSubmit = (values) => {
        //TODO axios Patch USER!
        console.log(values);
        const editedUser = {
            id: values.id,
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            updatedAt: new Date()
        };
        const formData = new FormData();
        formData.append("image", file);
        formData.append("id", values.id);
        formData.append("firstName", values.firstName);
        formData.append("lastName", values.lastName);
        formData.append("email", values.email);
        console.log(editedUser)
        axios.put(`${process.env.REACT_APP_PUBLIC_URL_API}/users/updateProfile`, formData, {
            headers: { Authorization: `Bearer ${token}` }
        }).then((res) => {
            console.log(res);
            dispatch(setUserLogged({ accessToken: token, user: { ...editedUser, image: res.data.image, roleId: userLogged.user.roleId } }))
        })
            .catch(function (error) {
                console.log(error);
            });

        //TODO axios get users

        setShow(false);
    };
    return (
        <div className="container mt-5 d-flex flex-column flex-md-column align-items-center justify-content-center" style={{ fontSize: 2 + 'rem', height: '72vh' }}>
            {show && (
                <EditProfile
                    editFormData={editFormData}
                    setShow={setShow}
                    handleEditFormSubmit={handleEditFormSubmit}
                    saveFile={saveFile}
                />
            )}
            <h1 className="title text-center">Panel de administración</h1>
            <div className="row mt-5 mx-5">
                
                <div className="col-12 col-md-8 mt-5">
                    <h2 className="subtitle mb-5">Bienvenido Usuario:</h2>
                    <p className="card-text mb-4">Nombre:  {userLogged.user.firstName}  {userLogged.user.lastName}</p>
                    <p className="card-text mb-4">Email:  {userLogged.user.email}</p>
                    <div className="mb-2">
                        <button onClick={(e) => {
                            handleEditUser(e, userLogged.user);
                            setShow(true);
                        }} className="btn btn-light text-white mb-2 fs-3" style={{ width: 110, borderRadius: 30 }}>Editar</button>
                    </div>
                    <div className="mb-4">
                        <button onClick={(e) => {
                            e.preventDefault();
                            Alert.confirmRequest(
                                { title: `Cuidado!`, message: "¿Seguro de deseas eliminar tu usuario?" },
                                () => { handleDelete(userLogged.user.id); Alert.success({ title: 'Hasta luego', message: "Gracias por haber formado parte de Somos Más" }) }
                            );
                        }} className="btn btn-primary text-white fs-3" style={{ width: 110, borderRadius: 30 }}>Eliminar</button>
                    </div>
                    <div>
                        <small className="text-muted">Última actualización del perfil: {new Date(userLogged.user.updatedAt).toLocaleDateString("en-AU")}</small>
                    </div>
                </div>
                <div className="col-12 col-md-4 mt-5">
                    {userLogged.user.image &&
                        <img src={`${process.env.REACT_APP_PUBLIC_URL_API}/activity/image/${userLogged.user.image}`} alt="avatar" className="image" style={{ width: '24rem',height:'24rem' ,
                                                                                                                                                             borderRadius: '.9rem',
                                                                                                                                                             objectFit:'cover',
                                                                                                                                                             objectPosition:'center'
                                                                                                                                                             }} />
                    }
                </div>
            </div>
        </div>
    );
}

export default MyProfile;