import React from 'react';
import './SignUp.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../firebase.config';
import { Link } from 'react-router-dom';
import google from '../../icons/Group 573.png'


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }


const SignUp = () => {

    const handleClick = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then((result) => {
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;
        console.log(user, token)
    }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorCode, errorMessage, email, credential);
    });
}

    const handleBlur = () => {

    }


    const handleSubmit = () => {

    }
    return (
        <div>
            <form className="login-form" onSubmit={handleSubmit}>
                <h4>Create an account</h4>
                <input className="input-text" name="name" required placeholder="Name" onBlur={handleBlur} />

                <input className="input-text" name="email" required placeholder="Email" onBlur={handleBlur} />
                {/* <p style={{ color: "red" }}>{user.error}</p> */}

                <input className="input-text" type="password" name="password" required placeholder="Password" onBlur={handleBlur} />

                <input className="input-text" type="password" name="confirmPassword" required placeholder="Confirm Password" onBlur={handleBlur} />

                <input className="submit" type="submit" value="Create an account" />
                <br />
                <p>Already have an account? <Link className="create-account" to="/login">Login</Link> </p>
            </form>
            <div className="btn-aria">
                <big>Or</big>
                <br />
                <button onClick={handleClick}> <img src={google} alt=""/> Create With Google</button>
            </div>
        </div>
    );
};

export default SignUp;