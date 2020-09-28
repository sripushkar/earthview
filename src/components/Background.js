import React, { Component } from 'react';
import '../index.css'
import '../Bulma.sass'

import Footer from "./Footer"

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
              <div className="hero-body">
              
              </div>
              <Footer/>        
            </section>            
        );
      }
}

export default App;