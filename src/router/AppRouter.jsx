import React,{useEffect} from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Contenido from "../components/Cotenido/Contenido";
import Login from "../auth/Login/Login";
import useAuthStore from '../hook/useAuthStore';
const AppRouter = () => {

    const authStatus = 'no-authentication';

    const {status,checkAuthToken}= useAuthStore();


    useEffect(() => {
        checkAuthToken();
    }, [])
    

    if(status !=='checking'){
        return (
            <h5>Cargando....</h5>
        );

    }

    return (
        <Routes>
            {
                (status === 'no-authentication')
                    ? (
                        <>
                        <Route path="/auth/*" element={<Login />} />
                        <Route path="/*" element={<Navigate to="/auth/login" />} />
                       
                        </>
                    )
                    : (
                        <>
                         <Route path="/" element={<Contenido />} />
                         <Route path="/*" element={<Navigate to="/" />} />

                        </>
                    )
            }
            


        </Routes>
    )
}
export default AppRouter;