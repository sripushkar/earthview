import React, { Component } from 'react';
import { Grid } from '@material-ui/core'
import '../index.css'

import randomMap from '../data/randomMap'

class App extends Component {
    
    
      render() {
        const mapURL = randomMap["Image URL"]
        return (
          <Grid style={{ backgroundImage: `url(${mapURL})`, backgroundSize: 'cover', width: "100%" }}>
            <p>{JSON.stringify(randomMap["Image URL"])}</p>
          </Grid>
        );
      }
}

export default App;