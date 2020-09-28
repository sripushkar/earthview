import React, { Component } from 'react';

export default class Weather extends Component {
    state = {
        latitude: null,
        longitude: null,
        weather: {}
      }
    componentDidMount() {
        const options = {
            enableHighAccuracy: false,
            timeout: 2000,
            maximumAge: 500
          };

        navigator.geolocation.getCurrentPosition(position => {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            this.setState({latitude: position.coords.latitude, longitude: position.coords.longitude})

            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
            fetch(weatherUrl)
                .then(response => response.json())
                    .then(data => {
                        this.setState({
                            weather: {
                                city: data.name || "city",
                                forecast: data.weather[0].main,                                
                                description: data.weather[0].description || "description",
                                iconUrl: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
                                temperature: this.kelvinToFahrenheit(data.main.temp) || 0,
                                minTemperature: this.kelvinToFahrenheit(data.main.temp_min) || 0,
                                maxTemperature: this.kelvinToFahrenheit(data.main.temp_max) || 0,
                                precipitation: data.weather[0].main === "Rain" ? data["rain"]["1h"] : 0,
                                humidity: data.main.humidity
                            }
                        })
                    }) 
                .catch(error => console.log(error))
            console.log("Called API")
        }, error => {
            console.log(error)    
        }, options);
    }

    kelvinToFahrenheit = temp => Math.round(temp * 1.8 - 459.67)

    //Fetches weather data from API
    componentDidUpdate(){
    }

    render() {
        
        return (
            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">Weather in {this.state.weather.city}</p>
                </header>
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <img src={this.state.weather.iconUrl} alt="Weather Icon"/>
                        </div>
                        <div className="media-content">
                            <p className="title is-4" style={{color: "hsl(217, 71%, 53%)"}}>{this.state.weather.temperature}°</p>
                            {/* <p class="title is-4" style={{color: "hsl(217, 71%, 53%)"}}>{this.state.weather.forecast}</p> */}
                            <p className="subtitle is-6">{this.state.weather.forecast}</p>
                        </div>                        
                    </div>
                    <div className="content">
                            <p>Precipitation: {this.state.weather.precipitation}%</p>
                            <p>Humidity: {this.state.weather.humidity}%</p>
                        </div>
                </div>
            </div>
        )
    }
}
