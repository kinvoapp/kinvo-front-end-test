import React from 'react'

import { SmallBoxContainer } from './style'


function SmallBox({title, value, type}) {

    function formatNumber(number) {
        if(type === 'money')
            return number.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

        if(type === 'percent')
            return number.toLocaleString('pt-BR') + '%'
    }

    return(
        <SmallBoxContainer>
            <div>
                <h3>{title}</h3>
                <p>{formatNumber(value)}</p>
            </div>
        </SmallBoxContainer>
    )
}

export default SmallBox