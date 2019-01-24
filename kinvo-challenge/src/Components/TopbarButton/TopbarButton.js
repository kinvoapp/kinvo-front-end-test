import React, { Component } from 'react'

// STYLES
import './TopbarButton.scss'

class TopbarButton extends Component {

	state = {
		link: `#${this.props.link}`
	}

	render() {
		return (
			<a href={ this.state.link }>
				<button className="topbar-btn">
					<span className="label">{ this.props.label }</span>
				</button>
			</a>
		)
	}
}

export default TopbarButton