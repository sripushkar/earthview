import React, { Component } from 'react'
import weatherFetch from "../weatherFetch"

export default class Weather extends Component {
    state = {
        latitude: null,
        longitude: null
      }
    
      componentDidMount() {
        navigator.geolocation.getCurrentPosition(position => {
          console.log("Latitude is :", position.coords.latitude);
          console.log("Longitude is :", position.coords.longitude);
          this.setState({latitude: position.coords.latitude, longitude: position.coords.longitude})
        });
      }
    render() {
        return (
            <div>
                <h1>{String(weatherFetch[0])}</h1>
            </div>
        )
    }
}
