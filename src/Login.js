import React, {useState} from 'react';
import "./Login.css";
import {Link,useNavigate} from 'react-router-dom';
import {auth} from './Firebase';

function Login() {
    const navigate = useNavigate();
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const signIn = e => {
        e.preventDefault();

        //Firebase sign-in logic
        auth
        .signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            //Successfully create user and password
            console.log(auth);
            if(auth)
            {
                //if account is successfully created, redirect to home
               navigate('/');
            }
        })
        //if promise isn't successful, then catch the error
        .catch(error => alert(error.message))
        ;
    }
    const register = e => {
        e.preventDefault();
        
        //Firebase register logic
        auth
        //Attempts to create the user with email and password
        .createUserWithEmailAndPassword(email,password)
        //once successful then it execute this promise
        .then((auth)=>{
            //Successfully create user and password
            console.log(auth);
            if(auth)
            {
                //if account is successfully created, redirect to home
               navigate('/');
            }
        })
        //if promise isn't successful, then catch the error
        .catch(error => alert(error.message))
        ;
    }


  return (
    <div className='login'>
    <Link to='/'>
        <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'/>
        </Link>

        <div className="login__container">
            <h1>Sigh-in</h1>

            <form action="">
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} name="" id="" />

                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} name="" id="" />

                <button className='login__signInButton' onClick={signIn} type='submit'>Sign In</button>
            </form>
            <p>By signing-in you agree to the Amazon Clone's conditions of USe & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
            <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
        </div>
    </div>
  )
}

export default Login
