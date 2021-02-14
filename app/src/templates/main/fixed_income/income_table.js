import React from 'react'
import { IncomeTableContainer } from './styles'

function IncomeTable() {
    return (
        <IncomeTableContainer>
            <div className='income_table_title'>
                <h2>Minhas Rendas Fixas</h2>
            </div>
            <div className='income_row'>
                <div className='income_row_content_container'></div>
                <div className='income_row_content_container'></div>
                <div className='income_row_content_container'></div>
            </div>
            <div className='income_row'>

            </div>
            <div className='income_row'>

            </div>

        </IncomeTableContainer>
    )
}

export default IncomeTable