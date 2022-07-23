import React from 'react';
import { Navbar, Container, Nav  } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href='/'>La Maison Du Pommier</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href='/'>Accueil</Nav.Link>
                        <Nav.Link href='/about'>A propos</Nav.Link>
                        <Nav.Link href='/booking'>Réservations</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;