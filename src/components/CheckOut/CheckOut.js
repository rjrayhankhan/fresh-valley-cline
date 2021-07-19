import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import './CheckOut.css';


const CheckOut = () => {
    const [data, setData] = useState([]);
    const [ loggedInUser ] = useContext(UserContext);
    const { id } = useParams();

    const url = `https://dry-savannah-52659.herokuapp.com/products`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(result => {
                const details = result.find(dt => dt._id === id)
                setData(details)
            })
    }, []);
    

    const handleClick = () => {
        const userOrder = {
            email: loggedInUser.email,
            product: data
        };

        // const url = `https://dry-savannah-52659.herokuapp.com/addProduct`;
        const url = `http://localhost:5055/userOrder`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userOrder)
        })
        .then(res => console.log('server site response', res))
    };
        
    

    return (
            <div className="container">
                <div className="check-out">
                    <h5 style={{ fontWeight: 'bold' }}>Check Out Product</h5>
                </div>
                <div className="check-aria">
                    <div className="check-out-header">
                        <Row>
                            <Col sm>Description</Col>
                            <Col sm>Quantity</Col>
                            <Col sm>Price</Col>
                        </Row>
                    </div>
                    <div className="check-out-data">
                        {
                            data.length === 0 ? <p>Login....</p> 
                            :<Row key={id} className="detail">
                            <Col className="detail-col" sm>{data.name}</Col>
                            <Col className="detail-col" sm>1</Col>
                            <Col className="detail-col" sm>${data.price}</Col>
                            </Row>
                        }
                    </div>
                </div>
                    <button onClick={handleClick} className="check-out-button">Check Out</button>
            </div>
    );
};

export default CheckOut;