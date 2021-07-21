import React from 'react';
import { Col, Row } from 'react-bootstrap';

const OrderData = (props) => {
    const { name, price, wight, } = props.data.product;
    const { date } = props.data;


    return (
        <div>
            {
             <Row className="detail">
                <Col className="detail-col" sm>{name}</Col>
                <Col className="detail-col" sm>{date}</Col>
                <Col className="detail-col" sm>{wight}</Col>
                <Col className="detail-col" sm>{price}</Col>
            </Row>
            }
        </div>
    );
};

export default OrderData;