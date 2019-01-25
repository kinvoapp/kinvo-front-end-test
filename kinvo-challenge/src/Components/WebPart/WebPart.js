import React, { Component } from 'react'

// STYLE
import './WebPart.scss'

class WebPart extends Component {

	render() {
		return (
			<div className="web-area">
				<section className="plans-text">
					<h6>KinvoWeb</h6>
					<h2><span>Kinvo.</span> Na palma da mão e na tela do computador </h2>
					<p>Além do aplicativo para smartphone, o Kinvo também conta com uma versão para computador. Você terá acesso a todos os Recursos Avançados disponíveis na versão mobile, com todo o conforto de uma visualização ampla, fácil de usar e com total segurança dos seus dados. Os recursos da versão para computador são exclusivos para assinantes e serão ativados junto com a escolha de um plano. Para acessar a ferramenta, é necessário antes baixar o aplicativo no seu celular.</p>
				</section>
				<div className="web-picture"></div>
			</div>
		)
	}
}

export default WebPart