import React from 'react';
import Card from 'react-bootstrap/Card';
import { MdLocationOn } from 'react-icons/md';
import CardItem from './CardItem';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdFavorite } from 'react-icons/md';
import { MdFavoriteBorder } from 'react-icons/md';
import { Fragment } from 'react';
// import CardHeader from './CardHeader';
// import CardBody from './CardBody';
import './style.css';

export default ({ data, offer, heart, currency }) => {
    const { name, title, mainPicture,    
        basePrice, noBedroom, noBathroom, 
        capacityOfPeople, address } = data;
    
    return (
        <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src={mainPicture.urlPhoto} alt={title}/>
            <Card.ImgOverlay>
                {offer ? <span className="offer">offer</span> : <span></span>}
                {heart ? <MdFavorite className="heart-icon red"/> 
                        : <MdFavoriteBorder className="heart-icon"/>}
                <p className="price">
                    {offer ? 
                        <Fragment>
                            <span className="normal-price">{currency}{basePrice} </span>
                                <span className="actual-price">{currency}1000</span>
                        </Fragment>
                        : <span className="actual-price">{currency}{basePrice}</span>
                    } /night
                </p>
            </Card.ImgOverlay>
            <Card.Body>
                <Card.Title>{name.toUpperCase()}</Card.Title>
                <Card.Text><MdLocationOn />{address.realAddress}</Card.Text>
                <div className="barra"></div>
                <Container className="item-padding">
                    <Row>
                        <Col>
                            <CardItem quantity={capacityOfPeople} text="Capacity"/>
                        </Col>
                        <Col>
                            <CardItem quantity={noBedroom} text="Bedrooms"/>
                        </Col>
                        <Col>
                            <CardItem quantity={noBathroom} text="Bathrooms"/>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
        // <div className="card-container">
        //     <CardHeader
        //         urlPhoto={mainPicture.urlPhoto}
        //         price={basePrice}
        //         title={title}
        //         offer={offer}
        //         heart={heart}
        //     />
        //     <CardBody 
        //         name={name}
        //         address={address.realAddress}
        //         noBedroom={noBedroom}
        //         noBathroom={noBathroom}
        //         capacityOfPeople={capacityOfPeople}
        //     />
        // </div>
    );
};