import "./styles.css";
//May need to delete this
import React from "react";
// import {Component} from 'react'
import FloorPlan from "./components/FloorPlan";

function App() {
  return (
    <div className="App">
      <h1>AS-BUILT CO.</h1>
      <h2>FloorPlan</h2>
      <FloorPlan />
    </div>
  );
}

// Must export the component's function (or class)

export default App;
