import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MyProfile from '../pages/user/MyProfile'

const DashboardRoutes = () => {
    return (
        <div>
            <Routes>
                <Route exact path="/user" element={ <MyProfile /> } />
            </Routes>
        </div>
    )
}

export default DashboardRoutes