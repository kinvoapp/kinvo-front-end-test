import React from 'react';
import './LeftMenu.css';
import MenuOption from './components/MenuOption';
import SubMenuOption from './components/SubMenuOption';

import ResumoCarteira from '../../assets/icons/portfolio-summary-icon--white.svg';
import MeusProdutos from '../../assets/icons/my-products-icon--white.svg';
import MeusProventos from '../../assets/icons/proceeds-icon--white.svg';
import ClasseDeAtivos from '../../assets/icons/asset-class-icon--white.svg';
import RentabiliadadeGeral from '../../assets/icons/general-rentability-icon--white.svg';
import ProjecaoCarteira from '../../assets/icons/portfolio-projection-icon--white.svg';
import RiscoXRetorno from '../../assets/icons/risk-and-return-icon--white.svg';
import CoberturaFGC from '../../assets/icons/fgc-coverage-icon--white.svg';



function LeftMenu(){

    let className = "expanded-option"
    return(
        <nav className="LeftMenu">

            <MenuOption Logo={ResumoCarteira}>
                Resumo 
                Da Carteira
            </MenuOption>
            <MenuOption Logo={MeusProdutos}>
                Meus
                Produtos
            </MenuOption>
            <MenuOption Logo={MeusProventos}>
                Meus
                Proventos
            </MenuOption>
            <MenuOption Logo={ClasseDeAtivos}>
                Classe de Ativos
                <SubMenuOption expanded={className}></SubMenuOption>
            </MenuOption>
            <MenuOption Logo={RentabiliadadeGeral}>
                Rentabildiade Geral
            </MenuOption>
            <MenuOption Logo={ProjecaoCarteira}>
                Projeção da Carteira
            </MenuOption>
            <MenuOption Logo={RiscoXRetorno}>
                Risco x Retorno
            </MenuOption>
            <MenuOption Logo={CoberturaFGC}>
                Cobertura do FGC
            </MenuOption>

        </nav>
        
    )
}

export default LeftMenu;