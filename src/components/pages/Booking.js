import React from 'react';
import { Container } from 'react-bootstrap';
import Calendar from '../Calendar';

const Booking = () => {
    return (
        <>
            <Container>
                <h1>Réservations</h1>
                <div className='calendarSquare'>
                <Calendar />
                </div>
            </Container>
        </>
    );
};

export default Booking;