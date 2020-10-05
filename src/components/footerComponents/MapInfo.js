import React, { Component } from 'react';
import "../../Bulma.sass"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import randomMap from '../../data/randomMap'

class MapInfo extends Component {

    render() {
        let region = ""
        if(this.props.region === "-"){
            region = ""
        }        
        else{
            region = this.props.region + ","
        }
        return (
            <p class="buttons is-right">
                <a className="button is-right" href={this.props.gMapsURL}>
                    Visit {`${region} ${this.props.country}`} on Google Maps
                    <span className="icon" style={{marginLeft: "0.5%"}}>
                        <FontAwesomeIcon icon={faMapMarkerAlt}/>
                    </span>
                </a>
            </p>
        );
    }
}

export default MapInfo;