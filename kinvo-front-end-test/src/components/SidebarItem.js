import React, { Component } from 'react';
import './SidebarItem.css';

import arrowLeft from './../images/sidebar/arrow-left.svg';

export class SidebarListItem extends Component {

  render() {
    return (
      <li>
        <a href="" alt={this.props.title}>
          <div className="li-wrapper">
            <div className="list-icon">
              <img src={this.props.icon}></img>
            </div>
            <span>{this.props.title}</span>
            <img class="arrow-left" src={arrowLeft}></img>
          </div>
        </a>
      </li>
    )
  }
}

export default SidebarListItem
