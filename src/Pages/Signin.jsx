import React, {useState} from 'react'
import firebase from 'firebase/app';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import Menu from '../Components/Menu'
import { NavLink } from 'react-router-dom';
import { Container, FormWrap, FormContent, FormLeft, Form, FormInput, FormButton, Text, TitleWrapper } from '../Components/StyledComponents'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

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
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
            }).catch(function(error) {
            // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }

    const handleChange = text => e => {
        setFormData({...formData, [text]: e.target.value})
    }

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const { email, password} = formData

    const createUser = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
            toast.success(`Signin Sucessfully! Welcome back!`);
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            toast.error(errorCode + errorMessage)
        });
    }

    return (
        <>
            <Container>
                <ToastContainer />
                <FormWrap>
                    {/* <FormContent>
                        <FormLeft>
                        <TitleWrapper>Movie</TitleWrapper>
                        <TitleWrapper>Share Comments</TitleWrapper>
                        </FormLeft>
                    </FormContent> */}
                    <FormContent>
                        <Form onSubmit={createUser}>
                            <TitleWrapper>Create an account</TitleWrapper>
                            <FormInput type='email' name='email' placeholder='Email Address' onChange={handleChange('email')} required/>
                            <FormInput type='password' name='password' placeholder='Password' onChange={handleChange('password')} required />
                            <FormButton type='submit' style={{backgroundColor: '#E50914'}}>Sign In</FormButton>
                            <Text> Or Sign in / Sign up with Google </Text>
                            <FormButton onClick={signInWithGoogle} style={{backgroundColor: '#B81D24'}}>Google</FormButton>
                            <small>By signing up, you agree to our <NavLink to='#'> Terms and Conditions</NavLink>.</small>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )

}

export default Signin;
