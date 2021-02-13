import React from 'react'
import {Container} from './styles'
import {Accordion} from '../../../../shared_components'
import {withRouter} from 'react-router-dom'

function LateralNav({history}){
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
                {name: 'Ação', pathname: 'acao'}, 
                {name: 'Fundo', pathname: 'fundo'}, 
                {name: 'Fundo Imobiliário', pathname: 'fundoImobiliario'},
                {name: 'Fundo Renda Fixa', pathname: 'fundoRendaFixa'}],
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
    return (
        <Container>
            <div className='lateral_nav'>
                <Accordion onChange={(a, b) => history.push(`/${a}/${b}`)} options={items}/>
            </div>
        </Container>
    )
}

export default withRouter(LateralNav)

