import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaCaretLeft } from '@react-icons/all-files/fa/FaCaretLeft'
import { FaCaretRight } from '@react-icons/all-files/fa/FaCaretRight'

const Calendar = () => {
    const [activeMonth, setactiveMonth] = useState(1);
    const [rows , setRows] = useState([]);
    let trows = [];

    const SwitchMonth = (which) => {
        if (which > 0 && which <= 12) {
                trows = [];
                setactiveMonth(which);
                getRows();
        }
    }
    useEffect(() => {
        getRows();
    }, []);

    const months = [
        {
            name: 'January',
            days: 31
        },
        {
            name: 'February',
            days: 28
        },
        {
            name: 'March',
            days: 31
        },
        {
            name: 'April',
            days: 30
        },
        {
            name: 'May',
            days: 31
        },
        {
            name: 'June',
            days: 30
        },
        {
            name: 'July',
            days: 31
        },
        {
            name: 'August',
            days: 31
        },
        {
            name: 'September',
            days: 30
        },
        {
            name: 'November',
            days: 30
        },
        {
            name: 'December',
            days: 31
        },
    ]
    const getRows = () => {
        let finished = false;
        for (let index = 0; index < months[activeMonth].days; index++) {
            if (index % 7 == 0) {
                trows.push(
                    <>
                        <Row className='border-bottom border-top calRow'>
                            <Col className='border-start border-end calCol'>{index+1 <= months[activeMonth].days && index+1}</Col>
                            <Col className='border-start border-end calCol'>{index+2 <= months[activeMonth].days && index+2}</Col>
                            <Col className='border-start border-end calCol'>{index+3 <= months[activeMonth].days && index+3}</Col>
                            <Col className='border-start border-end calCol'>{index+4 <= months[activeMonth].days && index+4}</Col>
                            <Col className='border-start border-end calCol'>{index+5 <= months[activeMonth].days && index+5}</Col>
                            <Col className='border-start border-end calCol'>{index+6 <= months[activeMonth].days && index+6}</Col>
                            <Col className='border-start border-end calCol'>{index+7 <= months[activeMonth].days && index+7}</Col>
                        </Row>
                    </>
                )
            } else if(index+1 == months[activeMonth].days){
                finished = true;
            }
            if (finished) {
                setRows(trows);
                
            }
        }
        
    }
    return (
        <>
            <Container className='myCalendarSquare' fluid>
                <Row>
                    <Col>
                        <Button onClick={() => SwitchMonth(activeMonth-1)}>
                            <FaCaretLeft/>
                        </Button>
                    </Col>
                    <Col>
                        <p>{months[activeMonth].name}{activeMonth}</p>
                    </Col>
                    <Col>
                        <Button onClick={() => SwitchMonth(activeMonth+1)}>
                            <FaCaretRight/>
                        </Button>
                    </Col>
                </Row>
                {rows.map((row, i) => {
                    return(
                        row
                        )
                    })}
            </Container>
        </>
    );
};

export default Calendar;