import React from 'react'
import {Container} from './styles'
import {Accordion} from '../../../../shared_components'

function LateralNav(){
    const items = [
        {
            option: 'Resumo da Carreira',
            innerOptions: [],
            icon: 'gauge_graph',
        }, 
        {
            option: 'Meus Produtos',
            innerOptions: [],
            icon: 'pie_chart'
        },
        {
            option: 'Meus Proventos',
            innerOptions: [],
            icon: 'money_symbol'
        },
        {
            option: 'Classes de Ativos',
            innerOptions: ['Ação', 'Fundo', 'Fundo Imobiliário', 'Fundo Renda Fixa'],
            icon: 'puzzle',
        },
        {
            option: 'Rentabilidade Real',
            innerOptions: [],
            icon: 'diamond'
        },
        {
            option: 'Projeção da Carteira',
            innerOptions: [],
            icon: 'tv_graph',
        },
        {
            option: 'Risco x Retorno',
            innerOptions: [],
            icon: 'beach_float'
        },
        {
            option: 'Cobertura do FGC',
            innerOptions: [],
            icon: 'locker'
        }
    ]
    return (
        <Container>
            <div className='lateral_nav'>
                <Accordion options={items}/>
            </div>
        </Container>
    )
}

export default LateralNav

