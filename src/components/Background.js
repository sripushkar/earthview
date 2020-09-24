import React, { Component } from 'react';
import { Grid } from '@material-ui/core'
import '../index.css'

const maps = require("../data/maps.json")

class App extends Component {
    randomItem = (arr) => {
        return arr[Math.floor(Math.random() * arr.length)];
      };
    
      render() {
        const randomMap = this.randomItem(maps);
        console.log(typeof(randomMap["Image URL"]));
        const mapURL = "http://" + randomMap["Image URL"]
    
        return (
          <Grid style={{ backgroundImage: `url(${mapURL})`, backgroundSize: 'cover', width: "100%" }}>
            <p>{JSON.stringify(randomMap["Image URL"])}</p>
          </Grid>
        );
      }
}

export default App;