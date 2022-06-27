import { useState, useEffect } from 'react';
import React from 'react'

const MyProfile = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const getUser = () => {
            fetch("/api/user/me", {
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
    }, []);

    const handleDelete = (id) => {
        fetch('/api/user/me/delete/' + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }).then(res => res.text());
    }

    return (
        <div className="container">
            <h1 className="title">My Profile</h1>
            <div className="row">
                <div className="col-md-6">
                    <img src={user.image} alt="avatar" className="img-fluid img-thumbnail" />
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{user.firstName} {user.lastName}</h5>
                            <p className="card-text">{user.email}</p>
                            <p className="card-text">{user.phone}</p>
                            <p className="card-text">{user.address}</p>
                            <div className="mb-2">
                                <button className="btn btn-primary">Editar</button>
                            </div>
                            <div className="mb-2">
                                <button onClick={() => handleDelete(user.id)} className="btn btn-danger">Eliminar</button>
                            </div>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated: {user.updatedAd}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyProfile;