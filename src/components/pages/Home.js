import React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';

const Home = () => {
    return (
        <>
            <Container fluid className='d-flex flex-column'>
                <Row>
                    <Col>
                        <h1>Accueil</h1>
                    </Col>
                    <Col>
                        <Image fluid src='/images/maison.jpg' />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Home;