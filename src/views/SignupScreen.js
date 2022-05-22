import React, { useState } from 'react';
import Signup from "../components/Signup";
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const SignupScreen = () => {
   
    
    const { logOut, currentUser } = useAuth()
    if(!currentUser){  return <div>
        <Signup />

    </div>;
    }
    if(currentUser) return <Navigate to={"/book"}/>
};

export default SignupScreen;
