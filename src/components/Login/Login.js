import React, { useContext, useState } from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../firebase.config';
import { Link, useHistory, useLocation } from 'react-router-dom';
import google from '../../icons/Group 573.png'
import { UserContext } from '../../App';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }


const Login = () => {
    const [ loggedInUser, setLoggedInUser ] = useContext(UserContext);
    // const [user, setUser] = useState({});

    
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

   const handleClick = () => {
     const provider = new firebase.auth.GoogleAuthProvider();
     firebase.auth().signInWithPopup(provider)
        .then((result) => {
        var user = result.user;
        // setUser(user)
        setLoggedInUser(user)
        history.replace(from);
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorCode, errorMessage, email, credential);
    });
   }

    const handleSubmit = () => {

    }

    const handleBlur = () => {

    }

    return (
        <div>
            <form className="login-form" onSubmit={handleSubmit}>
                <h3>Login</h3>
                <input className="input-text" onBlur={handleBlur} name="email" required  placeholder="Email" />
                <input className="input-text" onBlur={handleBlur} type="password" name="password" required placeholder="Password" />
                {/* <p style={{color: "red"}}>{user.error}</p> */}
                
                <div className="remember">
                    <input type="checkbox" name="remember" id="" />
                    <label htmlFor="remember">Remember Me</label>
                    <Link className="forget" to="">Forget Password</Link>
                </div>

                <input className="submit" type="submit" value="Login" />
                <br />
                <p>Don't have an account? <Link className="create-account" to="/signUp">Create an account</Link> </p>
            </form>
            <div className="btn-aria">
                <big>Or</big>
                <br />
                <button className="google-button" onClick={handleClick}> <img src={google} alt=""/> Create With Google</button>
            </div>
        </div>
    );
};

export default Login;