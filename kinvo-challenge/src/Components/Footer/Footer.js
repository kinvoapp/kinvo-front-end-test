import React, { Component } from 'react'

// STYLES
import './Footer.scss'

class Footer extends Component {
	render() {
		return (
			<section className="footer-content">
				<section className="stores">
					<p>Baixe o Kinvo:</p>
					<div></div>
				</section>
				<section className="trademark">
					<p><i class="far fa-copyright"></i>2018 <i class="fas fa-circle"></i> Todos os direitos reservados</p>
					<div></div>
				</section>
			</section>
		)
	}
}

export default Footer