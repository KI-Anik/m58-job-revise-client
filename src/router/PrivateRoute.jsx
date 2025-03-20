import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    console.log(location)
    const {user, loading}= useContext(AuthContext)

    if(loading){
        return <span className="loading loading-bars loading-xl"></span>
    }
    if(user){
        return children
    }
    return <Navigate to={'/signin'} state={location?.pathname}></Navigate>
};

export default PrivateRoute;