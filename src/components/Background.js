import React, { Component } from 'react';
import '../index.css'
import '../Bulma.sass'
import MapInfo from "./MapInfo"

import randomMap from '../data/randomMap'

class App extends Component {
    
    
      render() {
        const mapURL = randomMap["Image URL"]
        const bgStyles = {
          backgroundImage: `url(${mapURL})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }

        return (
          <section className="hero is-fullheight" style={bgStyles}>
            <div className="hero-body">
              
            </div>
            <MapInfo/>
          </section>
        );
      }
}

export default App;