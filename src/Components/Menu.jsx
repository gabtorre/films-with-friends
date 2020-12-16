import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Avatar from 'react-avatar';
import firebase from 'firebase/app';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Components.css'

export default function Menu() {

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

    const auth = firebase.auth();

    const [user] = useAuthState(auth);

    return (
        <Navbar className="darknav" variant="dark" expand="lg">
            { user ? <Navbar.Brand href="/home">
            Home
            </Navbar.Brand> : null }
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="mr-auto">

                </Nav>
                { user ?
                <>
                    <Navbar.Brand href="/home"><Avatar src={auth.currentUser.photoURL || "https://i.ibb.co/cJ6G9Vc/image.png"} size="50" round={true} /></Navbar.Brand>
                </>
                :
                <>
                <Nav.Link href="/signup"><Button variant="outline-danger" className="menubtns">Signup</Button></Nav.Link>
                <Nav.Link href="/signin"><Button variant="danger" className="menubtns">Signin</Button></Nav.Link>
                </>
                }


            </Navbar.Collapse>
        </Navbar>
    )
}
