import { useState, useEffect } from 'react';
import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../store/slices/users";
import EditProfile from './EditProfile'
import axios from "axios";

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

    const handleDelete = (id) => {
        fetch('/api/user/delete/' + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }).then(res => res.text());
    }

    const userLogged = useSelector(selectUser);
    console.log(userLogged)
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
        };
        console.log(formValues);

        setEditFormData(formValues);
        console.log(editFormData);
    };
    const handleEditFormSubmit = (values) => {
        //TODO axios Patch USER!
        console.log(values);
        const editedUser = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
        };

        axios
            .put(`${process.env.REACT_APP_PUBLIC_URL_API}/users/update`, editedUser, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((res) => {
                console.log(res);
            })
            .catch(function (error) {
                console.log(error.response.data.message);
            });

        //TODO axios get users

        setShow(false);
    };
    return (
        <div className="container mt-5" style={{ fontSize: 2 + 'rem', height: 600 }}>
            {show && (
                <EditProfile
                    editFormData={editFormData}
                    setShow={setShow}
                    handleEditFormSubmit={handleEditFormSubmit}
                />
            )}
            <h1 className="title text-center">Panel de administración</h1>
            <div className="row mt-5">
                <div className="col-12 col-md-4 mt-5">
                    {userLogged.user.image &&
                        <img src={`http://localhost:3001/activity/image/${userLogged.user.image}`} alt="avatar" className="img-fluid image" style={{ width: 400, borderRadius: 20 }} />
                    }
                </div>
                <div className="col-12 col-md-8 mt-5">
                    <h2 className="subtitle mb-5">Bienvenido Usuario:</h2>
                    <p className="card-text mb-4">Nombre:  {userLogged.user.firstName}  {userLogged.user.lastName}</p>
                    <p className="card-text mb-4">Email:  {userLogged.user.email}</p>
                    <div className="mb-2">
                        <button onClick={(e) => {
                            handleEditUser(e, userLogged.user);
                            setShow(true);
                        }} className="btn btn-primary mb-2 fs-3" style={{ width: 110, borderRadius: 30 }}>Editar</button>
                    </div>
                    <div className="mb-4">
                        <button onClick={() => handleDelete(userLogged.id)} className="btn btn-dark fs-3" style={{ width: 110, borderRadius: 30 }}>Eliminar</button>
                    </div>
                    <div>
                        <small className="text-muted">Última actualización del perfil: {new Date(userLogged.user.updatedAt).toLocaleDateString("en-AU")}</small>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyProfile;