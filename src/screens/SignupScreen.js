import React, { useRef } from 'react'
import "./SignupScreen.css";
import { auth } from "../firebase";
import { useNavigate } from 'react-router-dom';

function SignupScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const signIn =(e) => {
      e.preventDefault();

      auth.signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => alert(error.message));
    };
    const navigate = useNavigate();
    const cnfrm = () => {
        navigate("^");
    };
  return (
    <div className="signupBody">
      <div className="signupScreen">
        <form>
            <h3>Login to your account</h3>
            <h4>Email</h4>
            <input ref={emailRef} placeholder="Email" type="email"/>
            <h4>Password</h4>
            <input ref={passwordRef} placeholder="Password" type="password"/>
            <button type="submit" onClick={signIn} >
                Login</button>

            <h4>New to MyApp?
                <span className="loginScreen__link" onClick={cnfrm}> 
                 Sign Up</span>
            </h4>
        </form>

    </div>
  </div>
  );
}

export default SignupScreen