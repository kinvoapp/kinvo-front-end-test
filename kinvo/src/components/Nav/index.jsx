import React from 'react'

import { NavContainer } from './styles'

import NavItem from '../NavItem'
import NavSubItem from '../NavSubItem'

function Nav() {
    return(
        <NavContainer>
            <ul>
                <NavItem title="Resumo da Carteira" />
                <NavItem title="Meus Produtos" iconName="portfolio" />
                <NavItem title="Meus Proventos" iconName="cash" />
                <NavItem title="Classe de Ativos" active iconName="puzzle">
                    <ul>
                        <NavSubItem title="Ação"/>
                        <NavSubItem title="Fundo"/>
                        <NavSubItem title="Fundo Imobiliário"/>
                        <NavSubItem title="Fundo Renda Fixa" active/>
                    </ul>
                </NavItem>
                <NavItem title="Rentabilidade Real" iconName="jeweel" />
                <NavItem title="Projeção da Carteira" iconName="graph"/>
                <NavItem title="Risco x Retorno" iconName='wheel'/>
                <NavItem title="Cobertura do FGC" iconName='padlock'/>
            </ul>
        </NavContainer>
    )
}

export default Nav