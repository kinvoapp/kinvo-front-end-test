import React from 'react'
import { IncomeTableContainer } from './styles'
import { grayIcons } from '../../../assets/icons'
import { Dropdown, TextInput, Pagination } from '../../../shared_components'

function IncomeTable(props) {
    const { productData, activePage, setActivePage, productDataLength,
            search, setSearch, sortingProducts, setSortingProducts } = props
    
    const sortingOptions = [
        {label: 'Titulo - Cres.', id: 'fixedIncome.name', order: 0, dataType: 'string'},
        {label: 'Titulo - Decres.', id: 'fixedIncome.name', order: 1, dataType: 'string'},
        {label: 'Data de Venc. - Cres.', id: 'due.daysUntilExpiration', order: 0, dataType: 'int'},
        {label: 'Data de Venc. - Decres.', id: 'due.daysUntilExpiration', order: 1, dataType: 'int'},
        {label: 'Valor Aplicado - Cres.', id: 'position.valueApplied', order: 0, dataType: 'int'},
        {label: 'Valor Aplicado - Decres.', id: 'position.valueApplied', order: 1, dataType: 'int'},
        {label: 'Rentabilidade - Cres.', id: 'position.profitability', order: 0, dataType: 'int'},
        {label: 'Rentabilidade - Decres.', id: 'position.profitability', order: 1, dataType: 'int'},
    ]
    const walletColors = {
        'tesouro direto': 'var(--color-purple)',
        'renda fixa pré': 'var(--color-orange)',
        'renda fixa pós': 'var(--color-torquoise)' 
    }
    const getWalletTypeColor = (type) => {
        return walletColors[type.toLowerCase()]
    }
    
    if (productData) {
        return (
            <IncomeTableContainer>
                <div className='income_table_title'>
                    <h2>Minhas Rendas Fixas</h2>
                    <div className='search_and_sorting'>
                        <Dropdown styles={{marginRight: 20}}
                                  items={sortingOptions}
                                  itemKey={'label'}
                                  onChange={setSortingProducts}
                                  value={sortingProducts} 
                                  placeholder={'Ordenar por'}/>
                        
                        <TextInput value={search} 
                                   onChange={setSearch} 
                                   icon={'search'}/>
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
                                    <p><span style={{color: getWalletTypeColor(p.fixedIncome.bondType)}}>{p.fixedIncome.bondType}</span></p>
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
                                    <p><span>{p.due.date}</span></p>
                                </div>
                                <div className='income_row_colored'>
                                    <p>dias até venc.</p>
                                    <p><span>{p.due.daysUntilExpiration}</span></p>
                                </div>
                            </div>
                        </div>

                    </div>
                )}

                <Pagination activeNumber={activePage} 
                            setActiveNumber={setActivePage}
                            dataLength={productDataLength}/>

            </IncomeTableContainer>

        )
    } else return null
}

export default IncomeTable