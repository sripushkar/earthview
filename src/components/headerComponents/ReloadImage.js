import React, { Component } from 'react'
import { faRedo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { getRandomMap } from "../../data/randomMap"

export default class ReloadImage extends Component {
    onClick = () => {
        const newMap = getRandomMap()
        this.props.newImage(newMap["Image URL"], newMap["Google Maps URL"])
    }

    render() {        
        return (
            <p class="buttons is-right">
                <button className="button is-right" onClick={this.onClick}>
                    New Image
                    <span className="icon" style={{marginLeft: "0.5%"}}>
                        <FontAwesomeIcon icon={faRedo}/>
                    </span>
                </button>
            </p>
        );
    }
}
