import React, { Component } from 'react'

// STYLES
import './DataItem.scss'

// COMPONENTS

class DataItem extends Component {

	render() {
		return (
			<div className="data-item">
				<h6 style={{ color: this.props.fontColor }}>{this.props.value}</h6>
				<p>{this.props.label}</p>
			</div>
		)
	}
}

export default DataItem