import React from 'react';
import { Container } from 'react-bootstrap';

const Error404 = () => {
    return (
        <>
            <Container fluid>
                <h1>Erreur 404</h1>
                <h2>Malheureusement, ce chemin n'a mené à rien...</h2>
            </Container>
        </>
    );
};

export default Error404;