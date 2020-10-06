import React, { Component } from 'react'
import '../../Bulma.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faReact } from "@fortawesome/free-brands-svg-icons";


export default class Sripushkar extends Component {
    render() {
        return (           
            <a href="https://github.com/sripushkar">
                Created by Sripuhkar Julapally
                <FontAwesomeIcon icon={faGithub} style={{marginLeft: "0.5%"}}/>
                . Built with <FontAwesomeIcon icon={faReact} style={{marginLeft: "0.5%"}}/>.
            </a>                
        )
    }
}
