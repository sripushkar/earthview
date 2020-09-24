import React, { Component } from "react";
import "./App.css";
import { Container } from "@material-ui/core";
import Background from "./components/Background";
const maps = require("./data/maps.json");

class App extends Component {
  randomItem = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  render() {
    return(
    <div>
      <Background/>
    </div>
    
  )}
}

export default App;
