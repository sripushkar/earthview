import React, { Component } from 'react'

import MapInfo from "./MapInfo"
import Sripushkar from "./Sripushkar"

import "../Bulma.sass"

export default class Footer extends Component {
    render() {
        const noPadding = {
            paddingBottom: "0px",
            paddingTop: "0px",
            paddingRight: "0.5%",
            paddingLeft: "0.5%",

            marginBottom: "0px",
            
        }


        return (
                      
            <div className="columns" style={noPadding}>
                <div className="column" style={noPadding}>
                  <Sripushkar/>
                </div>

                <div className="column" style={noPadding}>
                  <MapInfo/>
                </div>
            </div>
        )
    }
}
