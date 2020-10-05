import React, { Component } from 'react';
import '../index.css'
import '../Bulma.sass'

import Header from "./Header"
import Footer from "./Footer"
import Weather from "./Weather"

import randomMap from '../data/randomMap'

class App extends Component {

  state = {
    oldURL: randomMap["Image URL"],
    mapURL: randomMap["Image URL"],
    gMapsURL: randomMap["Google Maps URL"]
  }
  newImage = (newMapURL, gMapsURL) => this.setState({oldURL: this.state.mapURL, mapURL: newMapURL, gMapsURL})
    
  render() {
    
    const bgStyles = {
      backgroundImage: `url(${this.state.mapURL})`,
      backgroundPosition: "center center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      overflow: "hidden",
    }

    return (
        <section className="hero is-fullheight" style={bgStyles}>
          <Header newImage = {this.newImage}/>
          <div className="hero-body">
            {/* <Weather/> */}
          </div>
          <Footer gMapsURL = {this.state.gMapsURL}/>        
        </section>            
    );
  }
}

export default App;