import React, { useContext } from 'react';
import './Header.css';
import { Link, useHistory } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { UserContext } from '../../App';



const Header = () => {
    const [ loggedInUser ] = useContext(UserContext);

    const history = useHistory();
    const handleClick = () => {
         const url = '/login';
         history.push(url);
    }

    return (
        <Navbar collapseOnSelect expand="lg">
            <Container className="navbar">
                <Navbar.Brand className="logo" href="#home">Fresh Product</Navbar.Brand>
                    <Nav  className="nav-ber">
                        <Link to="/home">Home</Link>
                        <Link to="/order">Order</Link>
                        <Link to="/admin">Admin</Link>
                        <Link to="/deals">Deals</Link>
                        {
                            loggedInUser.email 
                            ? <div className="user-photo"><img src={loggedInUser.photoURL} alt="" /></div>
                            : <Button onClick={handleClick}>Login</Button>
                        }
                    </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;