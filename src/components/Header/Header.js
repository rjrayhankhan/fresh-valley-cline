import React from 'react';
import './Header.css';
import { Link, useHistory } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const Header = () => {

    const history = useHistory();
    const handleClick = () => {
         const url = '/login';
         history.push(url);
    }

    return (
        <Navbar collapseOnSelect expand="lg">
            <Container className="navbar">
                <Navbar.Brand className="logo" href="#home">Fresh Valley</Navbar.Brand>
                    <Nav  className="nav-ber">
                        <Link to="/home">Home</Link>
                        <Link to="/order">Order</Link>
                        <Link to="/admin">Admin</Link>
                        <Link to="/contact">Contact</Link>
                        <Button onClick={handleClick}>Login</Button>
                    </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;