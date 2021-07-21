import React, { useContext, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './Order.css';
import { UserContext } from '../../App';
import { useEffect } from 'react';
import OrderData from './OrderData';


const Order = () => {
    const [order, setOrder] = useState([]);
    const [ loggedInUser ] = useContext(UserContext);


    useEffect(() => {
        fetch(`https://dry-savannah-52659.herokuapp.com/userOrders?email=` + loggedInUser.email)
        .then(res => res.json())
        .then(data => setOrder(data));
    }, []);


    return (
        <div className="container">
            <div className="check-out">
                <h5 style={{ fontWeight: 'bold' }}>Order Details</h5>
            </div>
            <div className="check-aria">
                <div className="check-out-header">
                    <Row>
                        <Col sm>Name</Col>
                        <Col sm>Order Date</Col>
                        <Col sm>wight</Col>
                        <Col sm>Price</Col>
                    </Row>
                </div>
                <div className="check-out-data">
                    {
                        order.map(orders => <OrderData key={orders.product._id} data={orders}></OrderData>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Order;