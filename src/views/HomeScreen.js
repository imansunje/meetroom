import React from 'react';
import Navbar from '../components/NavBar';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';


const HomeScreen = () => {
    const { logOut, currentUser } = useAuth()
    if(currentUser){
    return <div>
        {/* <Home /> */}

    </div>;}
    if(!currentUser) <Navigate to={"/signin"} />
};

export default HomeScreen;
