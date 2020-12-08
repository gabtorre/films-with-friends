import React from 'react'
import {CardWrapper} from '../StyledComponents'
import Avatar from 'react-avatar';
import firebase from 'firebase/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import Button from 'react-bootstrap/Button'
import '../Components.css'
const auth = firebase.auth();

export default function ProfileBar () {

    const [user] = useAuthState(auth);

    return (
        <>

            <CardWrapper>Home</CardWrapper>
            <CardWrapper>Watch List</CardWrapper>
            <CardWrapper>Library</CardWrapper>
            <CardWrapper>
                { user ? <div className="inBlock"><Avatar src={auth.currentUser.photoURL || "https://i.ibb.co/cJ6G9Vc/image.png"} size="50" round={true} /> <span>username</span><Button className="signoutbtn">Sign Out</Button></div>: null}
            </CardWrapper>


        </>
    )

}
