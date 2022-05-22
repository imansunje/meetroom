import React from 'react';
import Signin from '../components/Signin';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const SigninScreen = () => {
    const { logOut, currentUser } = useAuth();
    if(!currentUser){return <div>
        <Signin />

    </div>;} if(currentUser) return <Navigate to={"/book"}/>
};

export default SigninScreen;
