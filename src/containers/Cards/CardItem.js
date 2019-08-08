import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdPeople } from 'react-icons/md';
import { MdAirlineSeatFlat } from 'react-icons/md';
import { MdAirlineSeatLegroomNormal } from 'react-icons/md';

function getIcon(text) {
    switch(text) {
        case "Capacity":
            return <MdPeople />;
        case "Bedrooms":
            return <MdAirlineSeatFlat />;
        case "Bathrooms":
            return <MdAirlineSeatLegroomNormal />;
        default:
            return <p>icono incorrecto</p>;

    }
}

export default ({quantity, text}) => {
    return (
        <Container>
            <Row>
                <Col className="right icon-size" xs={9}>{getIcon(text)}</Col>
                <Col className="left quantity">{quantity}</Col>
            </Row>
            <Row>
                <Col className="center text-item">{text}</Col>
            </Row>
        </Container>
    );
}