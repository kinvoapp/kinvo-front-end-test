import React, { Component } from 'react'

// STYLE
import './ResourcesCard.scss'

class ResourcesCard extends Component {

	render() {
		return (
			<div className="resources-card">
				<div className="resources-image" style={{backgroundImage: `url(${this.props.image})`}}></div>
				<div className="detail">
					<p>{this.props.title}</p>
					<p>{this.props.info}</p>
				</div>
			</div>
		)
	}
}

export default ResourcesCard