import React from 'react';
import { FaAngleRight, FaCheck } from 'react-icons/fa'

import { Container } from './styles';
import ButtonsMenuBar from './ButtonsMenuBar';


class MenuBar extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Container>
                <ButtonsMenuBar title="Resumo Da Carteira"/>
                <ButtonsMenuBar title="Meus Produtos"/>
                <ButtonsMenuBar title="Meus Proventos"/>
                <ButtonsMenuBar active title="Classe de Ativos"/>
                <ButtonsMenuBar title="Rentabilidade Real"/>
                <ButtonsMenuBar title="Projeção da Carteira"/>
                <ButtonsMenuBar title="Risco x Retorno"/>
                <ButtonsMenuBar title="Cobertura do FGC"/>
            </Container>            
        );
    }
}

export default MenuBar;