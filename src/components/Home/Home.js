import React, { useState, useEffect } from "react";
import './Home.css';
import { Container, Row, Button } from "react-bootstrap";
import Cart from '../Cart/Cart'

const Home = () => {
    const [products, setProducts] = useState([]);
    

    const url = `https://dry-savannah-52659.herokuapp.com/products`;

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    return (
        <div className="container">
            <div className="search-box">
                <input placeholder="search product" type="text"/>
                <Button className="button">Search</Button>
            </div>
            <Container>
                <Row>
                    {
                        products.map(pd => <Cart products={pd} key={pd._id}></Cart>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Home;