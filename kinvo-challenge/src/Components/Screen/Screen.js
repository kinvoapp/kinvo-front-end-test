import React, { Component } from 'react'

// STYLE
import './Screen.scss'

// COMPONENTS
import Topbar from '../Topbar/Topbar'
import BottomArea from '../BottomArea/BottomArea';
import Footer from '../Footer/Footer';
import Team from '../Team/Team';
import PlansArea from '../PlansArea/PlansArea';
import WebPart from '../WebPart/WebPart';
import AdvancedResources from '../AdvancedResources/AdvancedResources';
import About from '../About/About';

class Screen extends Component {

	state = {
		shown: 'flex'
	}

	getPosition = () => {
		return window.onscroll = () => {
			let yAxis = window.pageYOffset
			if(yAxis > 450) {
				this.setState({ shown: 'rgba(0, 0, 0, 0.6)' })
			} else {
				this.setState({ shown: '' })
			}
		}
	}

	render() {
		return (
			<div className="main">
				<section className="jumbotron" id="jumbotron">
					{ this.getPosition() ? <Topbar display={this.state.shown}></Topbar> : <Topbar display={this.state.shown}></Topbar> }
					<BottomArea></BottomArea>
				</section>

				<section className="first-section" id="about">
					<About></About>
				</section>

				<section className="second-section" id="advanced_resources">
					<AdvancedResources></AdvancedResources>
				</section>

				<section className="third-section" id="web">
					<WebPart></WebPart>
				</section>

				<section className="fourth-section" id="plans">
					<PlansArea></PlansArea>
				</section>

				<section className="fifth-section" id="team">
					<Team></Team>
				</section>

				<section className="footer" id="footer">
					<Footer></Footer>
				</section>
			</div>
		)
	}
}

export default Screen