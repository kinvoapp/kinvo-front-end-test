import React, { Component } from 'react'

// STYLE
import './TeamMember.scss'

class TeamMember extends Component {

	render() {
		return (
			<section className="team-member">
				<div className="photo" style={{backgroundImage: `url(${this.props.image})`}}></div>
				<p className="name">{this.props.name}</p>
				<p className="function">{this.props.function}</p>
				<p className="info">{this.props.info}</p>
			</section>
		)
	}
}

export default TeamMember