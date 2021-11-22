import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../Hooks/useAuth';
import useFirebase from '../Hooks/useFirebase';
import './Login.css';

const Login = () => {
    const { googleSignIn, setUser } = useFirebase()
    const history = useHistory()
    const location = useLocation()
    const url = location.state?.from || '/home'
    const handleBtn = () => {
        googleSignIn().then(result => {
            setUser(result.user)
            history.push(url)
        })
    }
    return (
        <div className="d-flex items-center justify-content-center">
            <div className="border w-25 rounded p-5 m-5 text-center">
                <h2>Please login</h2>
                <button onClick={handleBtn} className="bg-primary text-white fw-bold p-2 rounded ">Google sign in</button>
            </div >
        </div >
    );
};
// onClick={googleSignIn}
export default Login;