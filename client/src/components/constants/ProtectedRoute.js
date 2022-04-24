import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import Home from '../pages/home';
import { useAuth0 } from "@auth0/auth0-react";

export default function ProtectedRoute(children) {
    
    const {isAuthenticated} = useAuth0();
    const ProtectedRoute = ({children})=> {
        if(isAuthenticated === false){
        return <Navigate to={<Home/>} replace/> }
    
    return(children)
        }
}