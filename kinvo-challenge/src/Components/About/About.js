import React, { Component } from 'react'

// STYLES
import './About.scss'
import DataItem from '../DataItem/DataItem';

// COMPONENTS

class About extends Component {

	state = {
		data: [
			{ id: 0, value: '5.4 Bilhões', label: 'Em investimentos', fontColor: '#0DD1E3' },
			{ id: 1, value: '45mil', label: 'Carteiras Criadas', fontColor: '#9E51BA' },
			{ id: 2, value: '500mil', label: 'Produtos Cadastrados', fontColor: '#FF8052' },
			{ id: 3, value: '1.2mi', label: 'Minutos de uso mensal', fontColor: '#ACBE49' },
		]
	}

	render() {
		return (
			<div className="about">

				<div className="text-video">
					<section>
						<h6>Sobre o Kinvo</h6>
						<h2><span>Kinvo.</span> Agora ficou simple controla seus investimentos.</h2>
						<p>Investir não é fácil. E, quanto mais você investe, mais difícil fica. Acompanhar todos os rendimentos, variações, alto e baixos do mercado dá uma dor de cabeça e muitas vezes é necessária a ajuda de um consultor. O Kinvo é uma plataforma que te ajuda a controlar, analisar e acompanhar todos os seus investimentos. Mesmo que você tenha diversas aplicações em diversos lugares não tem problema. Com o Kinvo você reúne tudo em um só lugar, de um jeito muito simples e intuitivo.</p>
					</section>

					<iframe
						id="video"
						title="about"
						width="50%"
						height="300"
						src="https://www.youtube.com/embed/LqWYuEO0sC0"
						frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
					</iframe>
				</div>

				<ul>
					{ this.state.data.map((item) => (
						<DataItem
							value={item.value}
							label={item.label}
							fontColor={item.fontColor}
						></DataItem>
					)) }
				</ul>

				<div className="phones"></div>
			</div>
		)
	}
}

export default About