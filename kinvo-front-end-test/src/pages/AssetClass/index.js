import React from 'react';

import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';
import FixedIncome from '../../components/FixedIncome';
import { Container } from './style'

class AssetClass extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <div>
                <Header />
                <Container>
                    <MenuBar />
                    <FixedIncome />
                </Container>
            </div>
        );
    }
}

export default AssetClass;