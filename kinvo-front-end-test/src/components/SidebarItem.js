import React, { Component } from 'react';
import './SidebarItem.css';

import arrowLeft from './../images/sidebar/arrow-left.svg';

export class SidebarItem extends Component {

  render() {
    //For the happy path
    const activeStyle = () => {
      return (this.props.isEnabled ? 'enabled' : '');
    }

    return (
      <li>
        <a href="#">
          <div className={`li-wrapper ${activeStyle()}`} >
            <div className="list-icon">
              <img src={this.props.icon} alt={this.props.title}></img>
            </div>
            <span>{this.props.title}</span>
            <img className="arrow-left" src={arrowLeft} alt=""></img>
          </div>
        </a>
      </li>
    )
  }
}

export default SidebarItem
