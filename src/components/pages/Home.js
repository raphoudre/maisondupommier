import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import HomeCarousel from '../HomeCarousel';
import '../../styles/style.css'

const Home = () => {
    return (
        <>
            <Container fluid className='d-flex flex-column'>
                <Row className='mb-2'>
                    <Col>
                        <Row>
                            <h1 className='text-center'>Un paradis à proximité de la mer</h1>
                        </Row>
                        <Row>
                            <p className='text-center homeSecondTitle'>Venez découvrir la Normandie dans notre maison tout confort indépendante pour 6 personnes à seulement 10 minutes d'Etretat, 6 minutes de la plage et 20 minutes du Havre. Son grand jardin fera le bonheur de petits et grands.</p>
                        </Row>
                    </Col>
                    
                </Row>
                <Row className='mb-2'>
                    <Col>
                        <HomeCarousel />
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Button className='buttonKnow'>
                        <p>En savoir plus</p>
                    </Button>
                </Row>
            </Container>
        </>
    );
};

export default Home;