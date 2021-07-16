import React from 'react';
import './Cart.css';
import { Col, Button, Card } from 'react-bootstrap';

const Cart = (props) => {
    const { name, price, image } = props.products;

    return (
        <Col className="container">
            <Card className="cart" >
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title className="title">{name}</Card.Title>
                    <div className="price-button">
                      <h2>${price}</h2>
                      <Button variant="primary">Buy Now</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Cart;