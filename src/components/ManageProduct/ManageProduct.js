import { faPen, faPlus, faThLarge, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ManageProduct.css';


const ManageProduct = () => {
    const [dataManage, setDataManage] = useState([]);
    
    const url = `https://dry-savannah-52659.herokuapp.com/products`;
    useEffect(() => {
       fetch(url)
       .then(res => res.json())
       .then(data => setDataManage(data))
    }, []);

const handleClick = (id) => {
    console.log('clicked', id);
}

    return (
        <Container>
            <div className="admin">
                <div className="side-ber">
                    <div className="side-ber-text">
                        <h3>Fresh Valley</h3>
                        <Link to="manageProduct" className="manage-product"><p><FontAwesomeIcon icon={faThLarge} /> Manage product</p></Link>
                        <Link to="admin" className="manage-product"><p><FontAwesomeIcon icon={faPlus} /> Add Product</p></Link>
                        <Link to="" className="manage-product"><p><FontAwesomeIcon icon={faPen} /> Edit Product</p></Link>
                    </div>
                </div>
                <div>
                    <div className="head">
                        <h5 style={{ fontWeight: 'bold' }}>Manage Product</h5>
                    </div>
                    <div className="data-aria">
                        <div className="data-header">
                            <Row>
                                <Col sm>Product Name</Col>
                                <Col sm>Wight</Col>
                                <Col sm>Price</Col>
                                <Col sm>Action</Col>
                            </Row>
                        </div>
                        <div className="show-data">
                            {
                                dataManage.map(data => 
                                 <Row key={data._id} className="detail">
                                    <Col className="detail-col" sm>{data.name}</Col>
                                    <Col className="detail-col" sm>{data.wight}</Col>
                                    <Col className="detail-col" sm>{data.price}</Col>
                                    <Col className="detail-col" sm>
                                        <button className="icon1"><FontAwesomeIcon icon={faPen} /></button>
                                        <button onClick={() => handleClick(data._id)} className="icon2"><FontAwesomeIcon icon={faTrashAlt} /></button>
                                    </Col>
                                </Row>)
                            }
                        </div>
                    </div>
                </div>
            </div >
        </Container>
    );
};

export default ManageProduct;