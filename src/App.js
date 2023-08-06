import React, {useEffect} from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import {auth} from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth){
        // Logged in
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else{
        // Logged out
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, []);
  


  return (
    <div className="app">
      <Router>
        { user!=null ? (
          <HomeScreen/>
        ) : (
          <Routes>
            <Route exact path="^" element={<LoginScreen/>} />

            <Route exact path="*" element={<SignupScreen/>} />  
          </Routes>
        )}
        
          {/* <Routes>
            <Route exact path="^" element={<LoginScreen/>} />

            <Route exact path="*" element={<SignupScreen/>} />
        
            <Route exact path="/" element={<HomeScreen/>} /> 
          </Routes> */}
         
        
        
      </Router>
    </div>
  );
}

export default App;
