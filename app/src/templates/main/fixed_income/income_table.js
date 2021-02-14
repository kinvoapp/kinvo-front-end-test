import React from 'react'
import { IncomeTableContainer } from './styles'
import { grayIcons } from '../../../assets/icons'
import { TextInput } from '../../../shared_components'

function IncomeTable({ productData }) {
    if (productData) {
        return (
            <IncomeTableContainer>
                <div className='income_table_title'>
                    <h2>Minhas Rendas Fixas</h2>
                    <div>
                        <TextInput icon={'search'}/>
                    </div>
                </div>
                {productData.map((p, key) =>

                    <div key={key} id={p.fixedIncome.portfolioProductId} className='income_row'>

                        <div className='income_row_content_container'>
                            <div className='income_row_title'>
                                <p>Título</p>
                                <img src={grayIcons['info']} alt='Info' />
                            </div>
                            <div className='income_row_content'>
                                <div>
                                    <p>{p.fixedIncome.name}</p>
                                </div>
                                <div className='income_row_colored'>
                                    <p>classe</p>
                                    <p><span>{p.fixedIncome.bondType}</span></p>
                                </div>
                            </div>
                        </div>

                        <div className='income_row_content_container'>
                            <div className='income_row_title'>
                                <p>Minha Posição</p>
                                <img src={grayIcons['info']} alt='Info' />
                            </div>
                            <div className='income_row_content'>
                                <div className='income_row_colored'>
                                    <p>valor inves.</p>
                                    <p><span>{p.position.valueApplied}</span></p>
                                </div>
                                <div className='income_row_colored'>
                                    <p>saldo bruto</p>
                                    <p><span>{p.position.equity}</span></p>
                                </div>
                                <div className='income_row_colored'>
                                    <p>rent.</p>
                                    <p><span>{p.position.profitability}</span></p>
                                </div>
                                <div className='income_row_colored'>
                                    <p>% da cart.</p>
                                    <p><span>{p.position.portfolioPercentage}</span></p>
                                </div>
                                <div className='income_row_colored'>
                                    <p>{p.position.indexerLabel}</p>
                                    <p><span>{p.position.indexerValue}</span></p>
                                </div>
                                <div className='income_row_colored'>
                                    <p>Sobre {p.position.indexerLabel}</p>
                                    <p><span>{p.position.percentageOverIndexer}</span></p>
                                </div>
                            </div>
                        </div>

                        <div className='income_row_content_container'>
                            <div className='income_row_title'>
                                <p>Vencimento</p>
                                <img src={grayIcons['info']} alt='Info' />
                            </div>
                            <div className='income_row_content'>
                                <div className='income_row_colored'>
                                    <p>data venc.</p>
                                    <p><span>15.05.2024</span></p>
                                </div>
                                <div className='income_row_colored'>
                                    <p>dias até venc.</p>
                                    <p><span>5762</span></p>
                                </div>
                            </div>
                        </div>

                    </div>
                )}


            </IncomeTableContainer>

        )
    } else return null
}

export default IncomeTable