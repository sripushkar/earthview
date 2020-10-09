import React, { Component } from 'react'
import ReloadImage from "./headerComponents/ReloadImage"
import ParticlesSettings from "./headerComponents/ParticlesSettings"

export default class Header extends Component {
    updateImage = (mapsURL, gMapsURL, region, country) => {
        this.props.newImage(mapsURL, gMapsURL, region, country)
    }

    updateParticles = (config, name) => {
        this.props.newParticles(config, name)
    }

    render() {
        const noPadding = {
            paddingBottom: "0px",
            paddingTop: "0px",
            paddingRight: "1%",
            paddingLeft: "1%",

            marginBottom: "0px",            
        }        

        return (                      
            <div className="columns">
                <div className="column" >
                    <h1 className="title is-3" style={{paddingLeft: "0.5%", paddingTop: "0.5%"}}>Earth View Improved</h1>
                </div>
                
                <div className="column">
                    <ReloadImage newImage={this.updateImage}/>
                    <ParticlesSettings updateParticles={this.updateParticles}/>                    
                </div>
            </div>
        )
    }
}
