import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import { GoSearch, GoGrabber } from "react-icons/go";

const Header = () => {
    return (
        <Navbar bg="white" expand="lg">
        <Container>
            <Nav>
                <NavDropdown title="지역" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">분당구</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                    Separated link
                </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <GoSearch />
        </Container>
        </Navbar>
    )
}

export default Header;