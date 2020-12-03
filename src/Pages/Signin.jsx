
import React from 'react'
import firebase from 'firebase/app';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

if(!firebase.apps.length){
    firebase.initializeApp({
        apiKey: process.env.REACT_APP_FB_APIKey,
        authDomain: process.env.REACT_APP_FB_AUTHD,
        projectId: process.env.REACT_APP_FB_PID,
        storageBucket: process.env.REACT_APP_FB_SB,
        messagingSenderId: process.env.REACT_APP_FB_MSID,
        appId: process.env.REACT_APP_FB_APPID,
    })
}

const Signin = () => {

    const auth = firebase.auth();

    const [user] = useAuthState(auth);

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
        <>
            <h1>Sign in / Sign up</h1>
            <button onClick={ signInWithGoogle }>Sign in / Sign up with Google</button>
        </>
    )

}

export default Signin;
