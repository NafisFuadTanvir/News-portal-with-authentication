import React, { useContext } from 'react';
import { Authcontext } from '../context/Authprovider';
import { Navigate, useLocation } from 'react-router-dom';

const Privateroute = ({children}) => {

    const location= useLocation();

    const {user,loading}= useContext(Authcontext);

    if(loading){

        return <span className="loading loading-dots loading-lg"></span>
    }

     if(user){

        return children
     }
    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default Privateroute;