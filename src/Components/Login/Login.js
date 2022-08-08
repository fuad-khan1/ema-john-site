import React, { useState } from "react";
import "./Login.css";
import {Link,  useNavigate} from 'react-router-dom'
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const Login = () => {
  const [email,setEmail]= useState('');
  const [pass, setPass]= useState('');
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const handleEmailBlur = event=>{
   setEmail( event.target.value);
  }
  
  const handlePassBlur = event=>{
    setPass(event.target.value);
  }
  if(user){
   navigate ('/shop');
  }
  const handleUserSignIn = event=>{
    event.preventDefault();
    signInWithEmailAndPassword(email,pass);

  }
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Login</h2>

        <form onSubmit={handleUserSignIn}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
        </div>
        <div className="input-group">
        <label htmlFor="password">Password</label>
        <input onBlur={handlePassBlur} type="password" name="password" id="" required />

        </div>
        <p style={{color:'red'}}>{error?.message}</p>
        {
          loading && <p>Loading...</p>
        }
        <input className="form-submit" type="submit" value="Login" />
        </form>
        <p>New to ema-john? <Link className="form-link" to="/signup">Create an account</Link></p>
      </div>
    </div>
  );
};

export default Login;
