import React from 'react'
import "./HomeScreen.css";
import PlanScreen from "./PlanScreen";
import "./PlanScreen.css";


function HomeScreen() {
  return ( 
  <div className="homeScreen">
    <main className="mainClass">
      <h1 className="quote">Choose the right plan for you</h1>
      <div>
        <div className="planClass">
          <div className="planBox">Mobile</div>
          <div className="planBox">Mobile</div>
          <div className="planBox">Mobile</div>
          <div className="planBox">Mobile</div>
          <PlanScreen/>
        </div>
      </div>
    </main>
    

    
  </div>
  );
  
}

export default HomeScreen;