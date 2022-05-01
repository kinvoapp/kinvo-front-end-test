import React, { useState, useEffect } from 'react'

import { Container, 
         Header, 
         Title, 
         SearchContainer, 
         Section } from './style'

import api from '../../../../api/api.js'

import SearchIcon from '../../../../assets/search-icon.svg'
import ItemBox from './ItemBox'

const MinhasRendasFixas = () => {

    const [dataRendaFixa, setDataRendaFixa] = useState([])

    useEffect(() => {

        api.get('')
            .then(( res ) => {

                let { snapshotByProduct } = res.data.data

                setDataRendaFixa(snapshotByProduct)

                console.log(snapshotByProduct)
            })
        
    }, [])

    return (

        <Container>
            <Header>
                <Title>Minhas Rendas Fixas</Title>
                <SearchContainer search={SearchIcon}>
                    <select name="select">
                        <option value="valor1">Valor 1</option>
                        <option value="valor2" selected>Valor 2</option>
                        <option value="valor3">Valor 3</option>
                    </select>
                    <div>
                        <input type='text' />
                    </div>
                </SearchContainer>
            </Header>
            <Section>
                {dataRendaFixa.map((item, index) => (
                    <ItemBox key={index} 
                             due={item.due} 
                             fixedIncome={item.fixedIncome} 
                             position={item.position}
                    />
                )) }
            </Section>
        </Container>
    )
}

export default MinhasRendasFixas