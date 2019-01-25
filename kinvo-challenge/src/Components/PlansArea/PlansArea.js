import React, { Component } from 'react'

// STYLE
import './PlansArea.scss'

// COMPONENTS
import PlansCard from '../PlansCard/PlansCard';

class PlansArea extends Component {

	state = {
		plans: [
			{ id: 0, planType: 'Plano Básico', baseColor: '#9DA5AC', description: ['1 carteira', '15 produtos', 'Produtos iniciados a partir de 2012', 'Análise básica', 'Gráfico de desempenho'], price: 'Gratuito' },
			{ id: 0, planType: 'Plano Mensal', baseColor: '#0DD1E3', description: ['5 carteiras', 'Produtos ilimitados', 'Produtos sem limite de início', 'Análises Avançadas', 'Acesso a versão web'], price: 'R$14,90 por mês' },
			{ id: 0, planType: 'Plano Anual', baseColor: '#9E51BA', description: ['5 carteiras', 'Produtos ilimitados', 'Produtos sem limite de início', 'Análises Avançadas', 'Acesso a versão web'], price: 'R$99,90 por ano' },
		]
	}

	render() {
		return (
			<div className="plans-area">
				<section className="plans-text">
					<h6>Planos e assinaturas</h6>
					<h2><span>Conheça os planos e</span> use todos os recursos do Kinvo.</h2>
					<p>O Kinvo já é completo desde a versão gratuita. Com ele você pode cadastrar diversos tipos de produtos. Assinando o Kinvo, você terá acesso aos Recursos Avançados de Análises e às Múltiplas Carteiras, que são recursos complementares e indispensáveis que te ajudam a ter uma visão completa do seu dinheiro, auxiliam nas tomadas de decisão e organizam seus investimentos. Conheça os nossos planos. Você poderá cancelar a assinatura a qualquer momento.</p>
				</section>

				<ul>
					{ this.state.plans.map((card) => (
						<PlansCard
							id={card.id}
							plan={card.planType}
							color={card.baseColor}
							description={card.description}
							price={card.price}
						></PlansCard>
					))}
				</ul>
			</div>
		)
	}
}

export default PlansArea