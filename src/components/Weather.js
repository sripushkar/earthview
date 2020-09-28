import React, { Component } from 'react'

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
                
            </div>
        )
    }
}
