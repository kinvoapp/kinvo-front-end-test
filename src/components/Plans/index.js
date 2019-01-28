import React, { Component } from 'react';
import './styles.scss';
import Card from './components/Card';

class Plans extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plans: [
                {
                    paletteSuffix: "7",
                    title: "Básico",
                    resources: [
                        "1 Carteira",
                        "15 Produtos",
                        "Produtos iniciados a partir de 2012",
                        "Análises básicas",
                        "Gráfico de desempenho"
                    ],
                    price: "Gratuito"
                },
                {
                    paletteSuffix: "1",
                    title: "Mensal",
                    resources: [
                        "5 Carteiras",
                        "Produtos ilimitados",
                        "Produtos sem limite de inicio",
                        "Análises avançadas",
                        "Acesso versão Web"
                    ],
                    price: "R$ 14,90"
                },
                {
                    paletteSuffix: "2",
                    title: "Anual",
                    resources: [
                        "5 Carteiras",
                        "Produtos ilimitados",
                        "Produtos sem limite de inicio",
                        "Análises avançadas",
                        "Acesso versão Web"
                    ],
                    price: "R$ 99,90"
                }
            ]
        };
    }
    render() {
        return (
            <section id="plans">
                <div className="container">
                    <div className="row py-5">
                        <div className="col-12 col-xl-5">
                            <article className="web__explanation mt-4 text-center text-xl-left mb-5" data-aos="fade-right">
                                <div className="h6 font-weight-normal text-pal-5">Planos e assinaturas</div>
                                <h2 className="text-pal-5 font-weight-bold"><span className="text-pal-2">Conheça os planos e</span> use todos os recursos do Kinvo.</h2>
                                <p className="mt-5 text-pal-5">O Kinvo já é completo desde a versão gratuita. Com ele você pode cadastrar diversos tipos de produtos. Assinando o Kinvo, você terá acesso aos Recursos Avançados de Análises e às Múltiplas Carteiras, que são recursos complementares e indispensáveis que te ajudam a ter uma visão completa do seu dinheiro, auxiliam nas tomadas de decisão e organizam seus investimentos. Conheça os nossos planos. Você poderá cancelar a assinatura a qualquer momento.</p>
                            </article>
                        </div>
                        <div className="col-12 col-xl-7">
                            { this.state.plans.map((plan, i) => (
                                <div className="row mx-0 mb-4" key={i} data-aos={"flip-" + (i % 2 === 0 ? "left" : "right")} data-aos-delay={i * 300} data-aos-duration="800">
                                    <div className="col-12 p-0">
                                        <Card
                                            paletteSuffix={plan.paletteSuffix}
                                            title={plan.title}
                                            resources={plan.resources}
                                            price={plan.price}
                                        ></Card> 
                                    </div>
                                </div>
                            )) }
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Plans;
