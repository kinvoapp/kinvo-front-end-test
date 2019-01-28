import React, { Component } from 'react';
import Hero from './components/Hero';
import './styles.scss';
import introVideo from './images/intro-video.png';
import appShowcase from './images/app-showcase.png';

class About extends Component {
    render() {
        return (
            <section id='about'>
                <Hero></Hero>
                <section id='about__explanation'>
                    <div className='container pt-5'>
                        <div className='row text-center text-lg-left py-5'>
                            <div className="col-12 col-md-6 col-lg-5">
                                <article>
                                    <div className="h6 font-weight-normal text-muted">Sobre o Kinvo</div>
                                    <h2 className="text-muted font-weight-bold"><span className='text-pal-1'>Kinvo</span>. Agora ficou simple controla seus investimentos.</h2>
                                    <p className="text-muted mt-5">Investir não é fácil. E, quanto mais você investe, mais difícil fica. Acompanhar todos os rendimentos, variações, alto e baixos do mercado dá uma dor de cabeça e muitas vezes é necessária a ajuda de um consultor. O Kinvo é uma plataforma que te ajuda a controlar, analisar e acompanhar todos os seus investimentos. Mesmo que você tenha diversas aplicações em diversos lugares não tem problema. Com o Kinvo você reúne tudo em um só lugar, de um jeito muito simples e intuitivo.</p>
                                </article>
                            </div>
                            <div className="col-12 col-md-6 col-lg-7">
                                <img src={introVideo} className='w-100' alt='Miniatura do vídeo de introdução'></img>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="about__statistics">
                    <div className="container pt-4">
                        <div className="row overflow-hidden">
                            <hr className="col-12"></hr>
                        </div>
                        <div className="row text-center py-3">
                            <div className="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0">
                                <div className="h1 text-pal-1 font-weight-bold">5.4 Bilhões</div>
                                <span className="text-black-50 d-block">Em investimentos</span>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0">
                                <div className="h1 text-pal-2 font-weight-bold">45mil</div>
                                <span className="text-black-50 d-block">Carteiras criadas</span>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0">
                                <div className="h1 text-pal-3 font-weight-bold">500mil</div>
                                <span className="text-black-50 d-block">Produtos cadastrados</span>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0">
                                <div className="h1 text-pal-4 font-weight-bold">1.2mi</div>
                                <span className="text-black-50 d-block">Minutos de uso mensal</span>
                            </div>
                        </div>
                        <div className="row overflow-hidden">
                            <hr className="col-12"></hr>
                        </div>
                    </div>
                </section>
                <section id="about__showcase">
                    <div className="container">
                        <div className="row justify-content-center pt-5">
                            <div className="col-11 col-md-10">
                                <img src={appShowcase} className='w-100' alt='Maquete do aplicativo'></img>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        );
    }
}

export default About;
