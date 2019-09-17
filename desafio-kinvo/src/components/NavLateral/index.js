import React from 'react';
import iconResumo  from './icons/iconResumo.svg';
import iconProdutos from './icons/iconProdutos.svg';
import iconProventos from './icons/iconProventos.svg';
import iconAnalise from './icons/iconAnalise.svg';
import iconRentabilidade from './icons/iconRentabilidade.svg';
import iconProjecao from './icons/iconProjecao.svg';
import iconRisco from './icons/iconRisco.svg';
import iconCobertura from './icons/iconCobertura.svg';

import seta from './seta.svg'
import './styles.css';

const NavLateral = () => (
    <nav id="main-nav" className="column box">
        <div className="box item itemLateral">
            <img className="navIcon" src={iconResumo}></img>
            <span>Resumo <br/>Da Carteira</span>
            <img className="seta" src={seta}></img>
        </div>
        <div className="box item itemLateral">
            <img className="navIcon" src={iconProdutos}></img>
            <span>Meus <br/>Produtos</span>
            <img className="seta" src={seta}></img>
        </div>
        <div className="box item itemLateral">
            <img className="navIcon" src={iconProventos}></img>
            <span>Meus <br/>Proventos</span>
            <img className="seta" src={seta}></img>
        </div>
        <div className="box item itemLateral selecionado">
            <img className="navIcon" src={iconAnalise}></img>
            <span>Análise por <br/>Classe de Produto</span>
            <img className="seta" src={seta}></img>
        </div>
        <div className="box item itemLateral">
            <img className="navIcon" src={iconRentabilidade}></img>
            <span>Rentabilidade <br/>Real</span>
            <img className="seta" src={seta}></img>
        </div>
        <div className="box item itemLateral">
            <img className="navIcon" src={iconProjecao}></img>
            <span>Projeção <br/>da Carteira</span>
            <img src={seta}></img>
        </div>
        <div className="box item itemLateral">
            <img className="navIcon" src={iconRisco}></img>
            <span>Risco <br/>X Retorno</span>
            <img className="seta" src={seta}></img>
        </div>
        <div className="box item itemLateral">
            <img className="navIcon" src={iconCobertura}></img>
            <span>Cobertura <br/>do FGC</span>
            <img className="seta" src={seta}></img>
        </div>
    </nav>
);

export default NavLateral;