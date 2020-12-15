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
            Movies
            </Navbar.Brand> : <Navbar.Brand>
            Movies
            </Navbar.Brand> }
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="mr-auto">

                </Nav>
                { user ?
                <>
                    {/* <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    </Form> */}

                    <Navbar.Brand href="/home"><Avatar src={auth.currentUser.photoURL || "https://i.ibb.co/cJ6G9Vc/image.png"} size="50" round={true} /></Navbar.Brand>
                    {/* <Avatar onClick={() => auth.signOut()} src={"https://i.ibb.co/cJ6G9Vc/image.png"} size="50" round={true} /> */}
                    {/* <Button variant="danger" className="menubtns">Post</Button> */}
                </>
                :
                <>
                    <Button variant="outline-danger" className="menubtns"  href="/signup" >Signup</Button>
                    <Button variant="danger" className="menubtns" href="/signin">Signin</Button>
                </>
                }


            </Navbar.Collapse>
        </Navbar>
    )
}
