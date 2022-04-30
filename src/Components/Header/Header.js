import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Cute Car</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    
                    </Nav>
                    <Nav>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    
                    <Nav.Link href="#about">About</Nav.Link>
                    
                    <Nav.Link href="#login">Login</Nav.Link>
                    <Nav.Link href="#logout">Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;