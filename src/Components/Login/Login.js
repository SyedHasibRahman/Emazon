import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../Firebase/Firebase.config';
import { useNavigate } from "react-router-dom";
import './Login.css';

const Login = () => {

    let navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        //Some 
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                if (auth) {
                    return navigate("/");
                }
                // ...
            })
            .catch(error => alert(error.message))
    }
    const register = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                // console.log(auth);
                if (auth) {
                    return navigate("/");
                }
            })
            .catch(error => alert(error.message))
        //
    }
    return (
        <div className='login'>

            <Link to="/">
                <img className='login_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt="" />

            </Link>
            <div className="login_container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail:</h5>
                    <input type={ "text" } value={ email } onChange={ e => setEmail(e.target.value) } />
                    <h5>Password:</h5>
                    <input type={ "password" } value={ password } onChange={ e => setPassword(e.target.value) } />
                    <button onClick={ signIn } className="login_signInButton">Sign-In</button>
                </form>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur fugiat, perspiciatis est sequi voluptate molestiae! Dolorum quia itaque earum amet.</p>
                <button onClick={ register } className="create_acountButton">
                    Create Your Amazon Account
                </button>
            </div>
        </div >

    );
};

export default Login;