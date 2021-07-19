import React from 'react';
import './Cart.css';
import { Col, Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Cart = (props) => {
    const { name, price, image, _id } = props.products;


    const history = useHistory();
    const handleClick = (id) => {
           const url = `/checkOut/${id}`;
           history.push(url);
    }

    return (
        <Col className="container">
            <Card className="cart" >
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title className="title">{name}</Card.Title>
                    <div className="price-button">
                      <h2>${price}</h2>
                      <Button onClick={() => handleClick(_id)} variant="primary">Buy Now</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Cart;