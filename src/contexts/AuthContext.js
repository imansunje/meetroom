import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import firebase, { auth } from "../config/firebase"


const AuthContext = React.createContext();
const db = firebase.firestore();


export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const signUp = async (email, password, firstName, lastName) => {
        const result = await auth.createUserWithEmailAndPassword(email, password);
        db.collection("accounts").doc(result.user.uid).set({
            uid: result.user.uid,
            role: 'customer',
            email: result.user.email,
            firstName: firstName,
            lastName: lastName

        }).then(() => navigate('/book')).catch(err => console.log(err));
    }

    const signIn = (email, password) => {
        auth.signInWithEmailAndPassword(email, password).then(() => {
            navigate('/book')

        });


    }

    const logOut = () => {
        return auth.signOut();
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signUp,
        signIn,
        logOut
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}



