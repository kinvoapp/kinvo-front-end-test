import React, { Component } from 'react'

// STYLE
import './Screen.scss'

// COMPONENTS
import Topbar from '../Topbar/Topbar'
import BottomArea from '../BottomArea/BottomArea';
import Footer from '../Footer/Footer';
import Team from '../Team/Team';
import PlansArea from '../PlansArea/PlansArea';

class Screen extends Component {

	render() {
		return (
			<div className="main">
				<section className="jumbotron" id="jumbotron">
					<Topbar></Topbar>
					<BottomArea></BottomArea>
				</section>

				<section className="first-section" id="about"></section>

				<section className="second-section" id="advanced_resources"></section>

				<section className="third-section" id="web"></section>

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