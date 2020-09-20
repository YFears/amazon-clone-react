import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Login.css'
import { db, auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = (e) => {
        e.preventDefault();

        // firebase login
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }
    const register = (e) => {
        e.preventDefault();

        // firebase register
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""
                    className="login__logo"
                />
            </Link>
            <div className="login__container">
                <h1 className="login__title">Sign-in</h1>
                <form action="">
                    <h5 className='login__insideTitle'>E-Mail</h5>
                    <input
                        className='login__input'
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <h5 className='login__insideTitle'>Password</h5>
                    <input
                        className='login__input'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        className='login__signInButton'
                        type='submit'
                        disabled={!email || !password}
                        onClick={signIn}
                    >Sign In</button>
                </form>
                <p className='login__info'>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button
                    className='login__registerButton'
                    type='submit'
                    disabled={!email || !password}
                    onClick={register}
                >Create your Amazon Cccount</button>
            </div>
        </div>
    )
}

export default Login
