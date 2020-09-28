import React, { Component } from 'react';
import '../index.css'
import '../Bulma.sass'

import Footer from "./Footer"
import Weather from "./Weather"

import randomMap from '../data/randomMap'

class App extends Component {
    
    
      render() {
        const mapURL = randomMap["Image URL"]
        const bgStyles = {
          backgroundImage: `url(${mapURL})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          overflow: "hidden"
        }

        return (
            <section className="hero is-fullheight" style={bgStyles}>
              <h1 className="title is-3" style={{paddingLeft: "0.5%", paddingTop: "0.5%"}}>Earth View Improved</h1>
              <div className="hero-body">
                <Weather/>
              </div>
              <Footer/>        
            </section>            
        );
      }
}

export default App;