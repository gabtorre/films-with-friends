import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Avatar from 'react-avatar';
import './Components.css'

export default function Menu() {
    return (
        <Navbar className="darknav" variant="dark" expand="lg">
            <Navbar.Brand href="#home">
            Movies
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                </Nav>

                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                </Form>

                <Avatar src="https://i.ibb.co/cJ6G9Vc/image.png" size="50" round={true} />

                <Button variant="primary" className="menubtns">Post</Button>

            </Navbar.Collapse>
        </Navbar>
    )
}
