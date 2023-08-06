import React, {useRef} from 'react'
import { auth } from "../firebase";
import "./LoginScreen.css";
import { useNavigate } from 'react-router-dom';


function LoginScreen(){
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const register =(e) => {
      e.preventDefault();

      auth.createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
    };

    const navigate = useNavigate();
    const confirm = () => {
        navigate("*");
    };
    
    


  return (
   <div className="loginBody">
    <div className="loginScreen">
        <form>
            <h3>Create Account</h3>
            <h4>Name</h4>
            <input placeholder="Name" type="text"/>
            <h4>Email</h4>
            <input ref={emailRef} placeholder="Email" type="email"/>
            <h4>Password</h4>
            <input ref={passwordRef} placeholder="Password" type="password"/>
            <button type="submit" onClick={register}>
                Sign Up</button>

            <h4>Already have an account?  
                <span className="signupScreen__link" onClick={confirm}> 
                 Login</span>
            </h4>
            
        </form>
    </div>
   </div>
  )
}


export default LoginScreen