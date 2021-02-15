import React from 'react';

import ArrowRightIcon from '../../assets/side-menu/arrow-right.svg';
import ResumoCarteiraIcon from '../../assets/side-menu/resumo-carteira.svg';
import MeusProdutosIcon from '../../assets/side-menu/meus-produtos.svg';
import MeusProventosIcon from '../../assets/side-menu/meus-proventos.svg';
import ClasseDeAtivosIcon from '../../assets/side-menu/classe-ativos.svg';
import RentabilidadeRealIcon from '../../assets/side-menu/rentabilidade-real.svg';
import ProjecaoCarteiraIcon from '../../assets/side-menu/projecao-carteira.svg';
import RiscoRetornoIcon from '../../assets/side-menu/risco-retorno.svg';
import CoberturaFgcIcon from '../../assets/side-menu/cobertura-fgc.svg';

import { MenuContainer, MenuUl, NavBar, MenuOption, MenuIcon, MenuOptionDescription, MenuDropdownIcon } from './styles';

// TODO: Transformar MenuOption em um componente isolado.
// TODO: Cada opção do menu pode ser uma posição de um array com as propriedades necessárias.

function Menu() {
  return (
    <MenuContainer>
      <NavBar>
        <MenuUl>
          <MenuOption>
            <MenuIcon src={ResumoCarteiraIcon} alt="Resumo Carteira Icone" />
            <MenuOptionDescription>Resumo Da Carteira</MenuOptionDescription>
            <MenuDropdownIcon src={ArrowRightIcon} alt="Lista Opções" />
          </MenuOption>
          <MenuOption>
            <MenuIcon src={MeusProdutosIcon} alt="Meus Produtos Icone" />
            <MenuOptionDescription>Meus Produtos</MenuOptionDescription>
            <MenuDropdownIcon src={ArrowRightIcon} alt="Lista Opções" />
          </MenuOption>
          <MenuOption>
            <MenuIcon src={MeusProventosIcon} alt="Meus Proventos Icone" />
            <MenuOptionDescription>Meus Proventos</MenuOptionDescription>
            <MenuDropdownIcon src={ArrowRightIcon} alt="Lista Opções" />
          </MenuOption>
          <MenuOption>
            <MenuIcon src={ClasseDeAtivosIcon} alt="Classe De Ativos Icone" />
            <MenuOptionDescription>Classe De Ativos</MenuOptionDescription>
            <MenuDropdownIcon src={ArrowRightIcon} alt="Lista Opções" />
          </MenuOption>
          <MenuOption>
            <MenuIcon src={RentabilidadeRealIcon} alt="Rentabilidade Real Icone" />
            <MenuOptionDescription>Rentabilidade Real</MenuOptionDescription>
            <MenuDropdownIcon src={ArrowRightIcon} alt="Lista Opções" />
          </MenuOption>
          <MenuOption>
            <MenuIcon src={ProjecaoCarteiraIcon} alt="Projeção Da Carteira Icone" />
            <MenuOptionDescription>Projeção Da Carteira</MenuOptionDescription>
            <MenuDropdownIcon src={ArrowRightIcon} alt="Lista Opções" />
          </MenuOption>
          <MenuOption>
            <MenuIcon src={RiscoRetornoIcon} alt="Risco Retorno Icone" />
            <MenuOptionDescription>Risco x Retorno</MenuOptionDescription>
            <MenuDropdownIcon src={ArrowRightIcon} alt="Lista Opções" />
          </MenuOption>
          <MenuOption>
            <MenuIcon src={CoberturaFgcIcon} alt="Cobertura FGC Icone" />
            <MenuOptionDescription>Cobertura Do FGC</MenuOptionDescription>
            <MenuDropdownIcon src={ArrowRightIcon} alt="Lista Opções" />
          </MenuOption>
        </MenuUl>
      </NavBar>
    </MenuContainer>
  );
}

export default Menu;
