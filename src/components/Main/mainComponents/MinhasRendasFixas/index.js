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
    const [search, setSearch] = useState('')
    const [select, setSelect] = useState('')
    
    
    useEffect(() => {

        api.get('')
            .then(( res ) => {

                let { snapshotByProduct } = res.data.data

                setDataRendaFixa(snapshotByProduct)

            })        
    }, [])

    const itemsFilteredSelect = dataRendaFixa.filter(item => item.fixedIncome.name.includes(select))
    const itemsFiltered = itemsFilteredSelect.filter(item => item.fixedIncome.name.includes(search))

    return (

        <Container> 
            <Header>
                <Title>Minhas Rendas Fixas</Title>
                <SearchContainer search={SearchIcon}>
                    <select name="select" value={select} onChange={el => setSelect(el.target.value)}>
                        <option value="">Todos</option>
                        <option value="Tesouro" selected>Tesouro</option>
                        <option value="CDB">CDB</option>
                        <option value="LC">LC</option>
                    </select>
                    <div>
                        <input type='text' 
                               onChange={(e) => setSearch(e.target.value)} 
                               value={search}
                        />
                    </div>
                </SearchContainer>
            </Header>
            
            <Section>
            {itemsFiltered.map( (item, index) => (
            <ItemBox key={index} 
                    itemsFiltered={itemsFiltered}
                    due={item.due} 
                    fixedIncome={item.fixedIncome} 
                    position={item.position}
                />
            ))}
            </Section>
        </Container>
    )
}

// itemsFiltered.map( (item, index) => (
//     <ItemBox key={index} 
//             itemsFiltered={itemsFiltered}
//             due={item.due} 
//             fixedIncome={item.fixedIncome} 
//             position={item.position}
//     />
// ))
export default MinhasRendasFixas