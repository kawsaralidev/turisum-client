import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from '../../Firebase/Firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const auth = getAuth();
    const GoogleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, GoogleProvider)

            .finally(() => setLoading(false))
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setLoading(false)
        })
        return () => unsubscribed;
    }, [])
    const logOut = () => {
        setLoading(true)
        signOut(auth)
            .then(() => {

            })
            .finally(() => setLoading(false))
    }
    return {
        user,
        loading,
        googleSignIn,
        logOut,
        setUser
    }
};

export default useFirebase;