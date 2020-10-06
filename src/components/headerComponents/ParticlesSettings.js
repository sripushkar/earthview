import React, { Component } from 'react'
import * as particles from "../../data/particlesConfig"
import "../../Bulma.sass"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default class particlesSettings extends Component {
    state = {
        collapsed: true,
        selected: "Snow"
    }

    openMenu = () => {
        this.setState({ collapsed: false });
    }
    closeMenu = () => {
        this.setState({ collapsed: true });
    }
    changeSelect = (selection) => {
        this.setState({ selected: selection })
    }

    render() {
        return (
            <div className={"dropdown" + (this.state.collapsed ? "" : " is-active")} tabIndex="0" onClick={this.openMenu} onBlur={this.closeMenu}>
                <div className="dropdown-trigger">
                    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                    <span>Particles Settings</span>
                    <span className="icon is-small">
                        <FontAwesomeIcon icon={faAngleDown}/>
                    </span>
                    </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                        <a className={"dropdown-item" + (this.state.selected === "Snow" ? " is-active" : "")} onClick={(e) => this.changeSelect(e.target.value)}>
                            Snow
                        </a>
                        <a className={"dropdown-item" + (this.state.selected === "Stars" ? " is-active" : "")} onClick={() => this.setState({ selected: "Stars" })}>
                            Stars
                        </a>                                  
                    </div>
                </div>
            </div>
        )
    }
}
