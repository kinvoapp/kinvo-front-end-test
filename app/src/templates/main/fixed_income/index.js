import React from 'react'
import {LateralNav, TopNav} from '../components'
import {Container} from './styles'

function FixedIncome(){
    return(
        <Container>
            <TopNav/>
            <LateralNav/>
            Renda Fixa
        </Container>
    )
}

export default FixedIncome