import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Contenido from "../components/Cotenido/Contenido";
import Login from "../auth/Login/Login";
const AppRouter = () => {

    const authStatus = 'no-authentication';

    return (
        <Routes>
            {
                authStatus === 'no-authentication'
                    ? <Route path="/auth/*" element={<Login />} />
                    : <Route path="/*" element={<Contenido />} />
            }
            <Route path="/*" element={<Navigate to="/auth/login" />} />


        </Routes>
    )
}
export default AppRouter;