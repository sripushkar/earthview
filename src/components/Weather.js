import React, { Component } from 'react'

export default class Weather extends Component {
    state = {
        latitude: null,
        longitude: null,
        weather: {}
      }
    componentDidMount() {
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
                                city: data.name,
                                main: data.weather[0].main,
                                description: data.weather[0].description,
                                iconUrl: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
                                temperature: this.kelvinToFahrenheit(data.main.temp),
                                minTemperature: this.kelvinToFahrenheit(data.main.temp_min),
                                maxTemperature: this.kelvinToFahrenheit(data.main.temp_max),
                                precipitation: `${data["weather"]["rain"]["1h"] * 100}%`,
                                humidity: `${data.weather.main.humidity}%`
                            }
                        })
                    }) 
                .catch(error => console.log(error))
            console.log("Called API")
        });
    }

    kelvinToFahrenheit = temp => (temp * 1.8 - 459.67).toFixed(2)

    //Fetches weather data from API
    componentDidUpdate(){
    }

    render() {
        
        return (
            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">{this.state.weather.city}</p>
                </header>
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <img src={this.state.weather.iconUrl} alt="Weather Icon"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
