import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword,user] =
    useCreateUserWithEmailAndPassword(auth);
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePassBlur = (event) => {
    setPass(event.target.value);
  };
  const handleConfirmPassBlur = (event) => {
    setConfirmPass(event.target.value);
  };
  if(user){
    navigate('/shop');
  }
  const handleCreateUser = (event) => {
    event.preventDefault();
    if (pass !== confirmPass) {
      setError("Password did not match");
      return;
    }
    if (pass.length < 6) {
      setError("Password must be 6 characters or longer");
      return;
    }
    createUserWithEmailAndPassword(email, pass);
  };

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Sign Up</h2>

        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="email">Sign Up</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePassBlur}
              type="password"
              name="password"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              onBlur={handleConfirmPassBlur}
              type="password"
              name="confirm-password"
              id=""
              required
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <input className="form-submit" type="submit" value="Sign Up" />
        </form>
        <p>
          Already have an account?{" "}
          <Link className="form-link" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
