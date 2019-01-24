import React, { Component } from 'react'

// STYLE
import './Screen.scss'

// COMPONENTS
import Topbar from '../Topbar/Topbar'

class Screen extends Component {

	render() {
		return (
			<div className="main">
				<section className="jumbotron" id="jumbotron">
					<Topbar></Topbar>
				</section>

				<section className="first-section" id="about"></section>

				<section className="second-section" id="advanced_resources"></section>

				<section className="third-section" id="web"></section>

				<section className="fourth-section" id="plans"></section>

				<section className="fifth-section" id="team"></section>

				<section className="footer" id="footer"></section>
			</div>
		)
	}
}

export default Screen