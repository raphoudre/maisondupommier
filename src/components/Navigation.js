import React from 'react';
import { Navbar, Container, Nav  } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const Navigation = () => {
    const location = useLocation();
    console.log(location);
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container className=''>
                <Navbar.Brand href='/'>La Maison Du Pommier</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className={location.pathname === '/' ? 'active' : null} href='/'>Accueil</Nav.Link>
                        <Nav.Link className={location.pathname === '/about' ? 'active' : null} href='/about'>A propos</Nav.Link>
                        <Nav.Link className={location.pathname === '/booking' ? 'active' : null} href='/booking'>Réservations</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;