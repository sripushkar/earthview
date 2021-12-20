import React, { Component } from 'react'
import * as particles from "../../data/particlesConfig"
import "../../Bulma.sass"

import Select from 'react-select' 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default class particlesSettings extends Component {
    state = {
        collapsed: true,
        config: particles.defaultParticlesConfig        
    }

    handleChange = (value) => {
        this.setState({config: value.config, name: value.label}, () => this.props.updateParticles(this.state.config, this.state.name))
    }

    render() {
        const options = [
            { value: 'none', label: 'None', config: null },
            { value: 'snow', label: 'Snow', config: particles.defaultParticlesConfig },
            { value: 'stars', label: 'Stars', config: particles.starsConfig},
            { value: 'covid', label: 'COVID-19', config: particles.covidConfig }            
          ]
          const styles = {
            width: "auto",
            marginLeft: "75%",
            marginTop: "-1%"
          }
        return (
            <div style={styles}>
                <Select options={options} placeholder="Set Particles" onChange={this.handleChange}/>
            </div>
        )
    }
}
