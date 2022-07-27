import React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';

const Home = () => {
    return (
        <>
            <Container fluid className='d-flex flex-column'>
                <Row>
                    <Col>
                        <Row>
                            <h1>Un paradis à proximité de la mer</h1>
                        </Row>
                        <Row>
                            <p>Venez découvrir la Normandie dans notre maison tout confort indépendante pour 6 personnes à seulement 10 minutes d'Etretat, 6 minutes de la plage et 20 minutes du Havre. Son grand jardin fera le bonheur de petits et grands.</p>
                        </Row>
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