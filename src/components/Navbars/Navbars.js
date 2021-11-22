import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../images/logos.png";
import useFirebase from '../Hooks/useFirebase';

const Navbars = () => {
    const { user, logOut } = useFirebase()
    return (
        <>
            <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <img className="rounded" src={logo} alt="" />
                    <Navbar.Brand href="#home">Turisum</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/addnewservice">AddNewService</Nav.Link>
                        <Nav.Link as={Link} to="/managebooking">ManageBooking</Nav.Link>



                        {user?.email ?
                            <Button onClick={logOut}>Logout</Button>
                            : <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                    <Nav className="me-auto">

                    </Nav>
                </Container>
            </Navbar>

        </>
    );
};

export default Navbars;