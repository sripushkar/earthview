import React, { Component } from 'react'
import * as particles from "../../data/particlesConfig"
import "../../Bulma.sass"

import Select from 'react-select' 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default class particlesSettings extends Component {
    state = {
        collapsed: true,
        defaultConfig: "snow"
    }

    render() {
        const options = [
            { value: 'snow', label: 'Snow' },
            { value: 'stars', label: 'Stars' }           
          ]
          const styles = {
            width: "40%"
          }
        return (
            <div style={styles}>
                <Select options={options} placeholder="Set Particles"/>
            </div>
        )
    }
}
