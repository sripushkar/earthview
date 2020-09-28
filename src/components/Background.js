import React, { Component } from 'react';
import '../index.css'
import '../Bulma.sass'

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
          <section class="hero is-fullheight" style={bgStyles}>
            <div class="hero-body">
              <h1 class="title has-background-primary-light	">{JSON.stringify(randomMap["Image URL"])}</h1>
            </div>
          </section>
        );
      }
}

export default App;