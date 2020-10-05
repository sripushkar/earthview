import React, { Component } from 'react'
import ReloadImage from "./headerComponents/ReloadImage"

export default class Header extends Component {
    updateImage = (mapsURL, gMapsURL) => {
        this.props.newImage(mapsURL, gMapsURL)
    }

    render() {
        const noPadding = {
            paddingBottom: "0px",
            paddingTop: "0px",
            paddingRight: "0.5%",
            paddingLeft: "0.5%",

            marginBottom: "0px",            
        }        

        return (                      
            <div className="columns">
                <div className="column" >
                    <h1 className="title is-3" style={{paddingLeft: "0.5%", paddingTop: "0.5%"}}>Earth View Improved</h1>
                </div>

                <div className="column">
                    <ReloadImage newImage={this.updateImage}/>
                </div>
            </div>
        )
    }
}
