import React, { Component } from 'react';
import Card from './components/Card';
import './styles.scss';

class Resources extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resources: [
                {
                    icon: require("./images/resource-1-icon.svg"),
                    iconAlt: "Gráfico",
                    title: "Análise de produtos",
                    desc: "Entenda como está distribuída sua carteira e como cada produto rende."
                },
                {
                    icon: require("./images/resource-2-icon.svg"),
                    iconAlt: "Alvo",
                    title: "Rentabilidade Real",
                    desc: "Saiba a rentabilidade das suas aplicações abatida da inflação."
                },
                {
                    icon: require("./images/resource-3-icon.svg"),
                    iconAlt: "Setas",
                    title: "Sensibilidade dos Ativos",
                    desc: "Entenda como cada ativo contribui para o resultado da carteira."
                },
                {
                    icon: require("./images/resource-4-icon.svg"),
                    iconAlt: "Farol",
                    title: "Cobertura FGC",
                    desc: "Cadastre e acompanhe diversas carteiras diferentes em seu perfil."
                },
                {
                    icon: require("./images/resource-5-icon.svg"),
                    iconAlt: "Toque",
                    title: "Projeção da Carteira",
                    desc: "Acompanhe quanto sua carteira poderá valer no futuro."
                },
                {
                    icon: require("./images/resource-6-icon.svg"),
                    iconAlt: "Cadeado",
                    title: "Risco x Retorno",
                    desc: "Conheça o risco e o retorno de cada produto da sua carteira."
                },
                {
                    icon: require("./images/resource-7-icon.svg"),
                    iconAlt: "Carteira",
                    title: "Multiplas Carteiras",
                    desc: "Cadastre e acompanhe diversas carteiras diferentes em seu perfil."
                },
                {
                    icon: require("./images/resource-8-icon.svg"),
                    iconAlt: "Notebook",
                    title: "Acesso ao Kinvo Web",
                    desc: "Cadastre e acompanhe diversas carteiras diferentes em seu perfil."
                },
            ]
        }
    }

    render() {
        return (
            <section id="resources" className='bg-pal-2-5'>
                <div className="container">
                    <div className="row py-5">
                        <div className="col-12 col-lg-7">
                            <div className="row">
                                { this.state.resources.map((resource, i) => (
                                    <div className="col-12 col-sm-6 col-lg-6 my-3 flex-grow-1" key={i} data-aos="zoom-in" data-aos-delay={i * 100}>
                                        <Card
                                            icon={resource.icon}
                                            iconAlt={resource.iconAlt}
                                            title={resource.title}
                                            desc={resource.desc}
                                        >
                                        </Card>
                                    </div>
                                )) }
                            </div>
                        </div>
                        <div className="col-12 col-lg-5 px-5">
                            <article className="resources__explanation mt-4 text-center text-lg-left" data-aos="fade">
                                <div className="h6 font-weight-normal text-white">Recursos Avançados</div>
                                <h2 className="text-white font-weight-bold"><span className="text-pal-2-6">Análises do Kinvo.</span><br></br>Controle total do seu dinheiro.</h2>
                                <p className="mt-5">O Kinvo agora conta com diversos Recursos Avançados que te ajudam a ver como os seus investimentos estão divididos, qual o risco/retorno e qual a sensibilidade dos produtos. O Kinvo também organiza seus investimentos da melhor forma possível. Você pode criar uma carteira para as aplicações de sua empresa e outra carteira para seus filhos ou netos.</p>
                                <p>Com os Recursos Avançados, todas as tomadas de decisão ficam mais fáceis. Você pode investir em um produto que está rendendo mais ou cancelar aquele que não vai bem. Você ainda pode criar projeções simulando o melhor tipo de investimento futuro para o seu dinheiro.</p>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Resources;
