import React, { Component } from 'react'

// STYLES
import './Topbar.scss'

// COMPONENTS
import TopbarButton from '../TopbarButton/TopbarButton'

class Topbar extends Component {
	render() {
		return (
			<nav className="topbar">
				<a id="header" href="#jumbotron"><div className="logo"></div></a>
				<nav className="buttons">
					<TopbarButton label="Sobre o Kinvo" link="about"></TopbarButton>
					<TopbarButton label="Recursos Avançados" link="advanced_resources"></TopbarButton>
					<TopbarButton label="Kinvo Web" link="web"></TopbarButton>
					<TopbarButton label="Planos" link="plans"></TopbarButton>

					<button className="register-btn">Cadastre-se</button>
					<button className="login-btn">Entrar</button>
				</nav>
			</nav>
		)
	}
}

export default Topbar