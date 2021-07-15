import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href="#home">Fresh Valley</Navbar.Brand>
                    <Nav  className="nav-ber">
                        <Link to="/home">Home</Link>
                        <Link to="/order">Order</Link>
                        <Link to="/admin">Admin</Link>
                        <Link to="/contact">Contact</Link>
                        <Button>Login</Button>
                    </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;