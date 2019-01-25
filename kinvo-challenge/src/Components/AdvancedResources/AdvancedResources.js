import React, { Component } from 'react'

// STYLE
import './AdvancedResources.scss'

// COMPONENTS
import ResourcesCard from '../ResourcesCard/ResourcesCard';

// IMAGES
import multiplas from '../../Images/multiplas.png'
import projecao from '../../Images/projecao.png'
import rentabilidade from '../../Images/rentabilidade.png'
import risco from '../../Images/risco.png'
import sensibilidade from '../../Images/sensibilidade.png'
import analise from '../../Images/analise.png'
import cobertura from '../../Images/cobertura.png'
import acesso from '../../Images/acesso.png'

class AdvancedResources extends Component {

	state = {
		resources: [
			{ id: 0, title: 'Análise de Produtos', image: analise, info: 'Entenda  como está distribuída sua carteira e como cada produto rende.' },
			{ id: 1, title: 'Rentabilidade Real', image: rentabilidade, info: 'Saiba a rentabilidade das suas aplicações abatida da inflação. ' },
			{ id: 2, title: 'Sensibilidade dos Ativos', image: sensibilidade, info: 'Entenda como cada ativo contribui para o resultado da carteira.' },
			{ id: 3, title: 'Cobertura do FGC', image: cobertura, info: 'Cadastre e acompanhe diversas carteiras diferentes em seu perfil.' },
			{ id: 4, title: 'Projeção da Carteira', image: projecao, info: 'Acompanhe quanto sua carteira poderá valer no futuro.' },
			{ id: 5, title: 'Risco x Retorno', image: risco, info: 'Conheça o risco e o retorno de cada produto da sua carteira.' },
			{ id: 6, title: 'Multiplas Carteiras', image: multiplas, info: 'Cadastre e acompanhe diversas carteiras diferentes em seu perfil.' },
			{ id: 7, title: 'Acesso ao Kinvo Web', image: acesso, info: 'Cadastre e acompanhe diversas carteiras diferentes em seu perfil.' },
		]
	}

	render() {
		return (
			<div className="advanced-resources">
				<ul className="cards-list">
					{ this.state.resources.map((card) => (
						<li key={card.id}>
							<ResourcesCard 
								title={card.title}
								image={card.image}
								info={card.info}/>
						</li>
					))}
				</ul>
				<section className="right-text">
					<h6>Recursos Avançados</h6>
					<h2><span>Análises do Kinvo.</span> Controle total do seu dinheiro.</h2>
					<p>O Kinvo agora conta com diversos Recursos Avançados que te ajudam a ver como os seus investimentos estão divididos, qual o risco/retorno e qual a sensibilidade dos produtos. O Kinvo também organiza seus investimentos da melhor forma possível. Você pode criar uma carteira para as aplicações de sua empresa e outra carteira para seus filhos ou netos.</p>
					<p>Com os Recursos Avançados, todas as tomadas de decisão ficam mais fáceis. Você pode investir em um produto que está rendendo mais ou cancelar aquele que não vai bem. Você ainda pode criar projeções simulando o melhor tipo de investimento futuro para o seu dinheiro.</p>
				</section>
			</div>
		)
	}
}

export default AdvancedResources