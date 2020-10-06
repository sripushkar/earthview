import React, { Component } from 'react';
import '../index.css'
import '../Bulma.sass'

import Header from "./Header"
import Footer from "./Footer"
import Weather from "./Weather"

import randomMap from '../data/randomMap'
import { defaultParticlesConfig, starsConfig } from "../data/particlesConfig"
import Particles from 'react-particles-js';

class App extends Component {

  state = {
    oldURL: randomMap["Image URL"],
    mapURL: randomMap["Image URL"],
    gMapsURL: randomMap["Google Maps URL"],
    region: randomMap["Region"],
    country: randomMap["Country"],
    particlesConfig: defaultParticlesConfig
  }
  newImage = (newMapURL, gMapsURL, region, country) => this.setState({oldURL: this.state.mapURL, mapURL: newMapURL, gMapsURL, region, country})
    
  render() {
    
    const bgStyles = {
      backgroundImage: `url(${this.state.mapURL})`,
      backgroundPosition: "center center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      overflow: "hidden",
    }

    const particlesStyles = {
        position:"absolute",
        left:"0",
        top:"0",
        width:"100%",
        height:"100%"
    }

    return (
      <div>
        <section className="hero is-fullheight" style={bgStyles}> 
          <Particles params={this.state.particlesConfig} style={particlesStyles}/>      
          <Header newImage = {this.newImage}/>          
          <div className="hero-body">          
            
          </div>
          <Footer gMapsURL = {this.state.gMapsURL} region = {this.state.region} country = {this.state.country}/>        
        </section> 
        </div>           
    );
  }
}

export default App;