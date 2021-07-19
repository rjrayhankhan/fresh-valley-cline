import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Order.css'

const Order = () => {
    return (
        <div className="container">
            <div className="check-out">
                <h5 style={{ fontWeight: 'bold' }}>Order Details</h5>
            </div>
            <div className="check-aria">
                <div className="check-out-header">
                    <Row>
                        <Col sm>Name</Col>
                        <Col sm>Quantity</Col>
                        <Col sm>wight</Col>
                        <Col sm>Price</Col>
                    </Row>
                </div>
                <div className="check-out-data">
                    <Row className="detail">
                        <Col className="detail-col" sm>data.name</Col>
                        <Col className="detail-col" sm>data.Quantity</Col>
                        <Col className="detail-col" sm>data.wight</Col>
                        <Col className="detail-col" sm>data.price</Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Order;