import React from 'react'
import { Container } from './styles'
import { Accordion } from '../../../../shared_components'
import { withRouter } from 'react-router-dom'
import {useWindowSize} from '../../../../hooks'

function LateralNav({ history }) {
    const windowSize = useWindowSize()
    const items = [
        {
            option: 'Resumo da Carreira',
            innerOptions: [],
            icon: 'gauge_graph',
            pathname: 'resumoDaCarreira',
        },
        {
            option: 'Meus Produtos',
            innerOptions: [],
            icon: 'pie_chart',
            pathname: 'meusProdutos',
        },
        {
            option: 'Meus Proventos',
            innerOptions: [],
            icon: 'money_symbol',
            pathname: 'meusProventos',
        },
        {
            option: 'Classes de Ativos',
            innerOptions: [
                { name: 'Ação', pathname: 'acao' },
                { name: 'Fundo', pathname: 'fundo' },
                { name: 'Fundo Imobiliário', pathname: 'fundoImobiliario' },
                { name: 'Fundo Renda Fixa', pathname: 'fundoRendaFixa' }],
            icon: 'puzzle',
            pathname: 'classesDeAtivos',
        },
        {
            option: 'Rentabilidade Real',
            innerOptions: [],
            icon: 'diamond',
            pathname: 'rentabilidadeReal',
        },
        {
            option: 'Projeção da Carteira',
            innerOptions: [],
            icon: 'tv_graph',
            pathname: 'projecaoDaCarreira',
        },
        {
            option: 'Risco x Retorno',
            innerOptions: [],
            icon: 'beach_float',
            pathname: 'riscoXretorno',
        },
        {
            option: 'Cobertura do FGC',
            innerOptions: [],
            icon: 'locker',
            pathname: 'coberturaDoFGC',
        }
    ]

    const closeNav = () => {
        const lateralNav = document.getElementById('lateral_nav')
        const lateralNavContainer = document.getElementById('lateral_nav_background')
        lateralNav.classList.remove('active')
        lateralNavContainer.classList.remove('active_lnav_background')
        
    }

    return (
        <Container >
            <div onClick={() => closeNav()} id='lateral_nav_background'/>
            <div id='lateral_nav' className={windowSize.width > 650 ? 'lateral_nav active' : 'lateral_nav'}>
                <Accordion onChange={(a, b) => history.push(`/${a}/${b}`)} options={items} />
            </div>
        </Container>
    )
}

export default withRouter(LateralNav)

