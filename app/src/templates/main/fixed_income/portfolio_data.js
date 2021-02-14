import React from 'react'

export default function PortfolioData({portfolioData}){
    if(portfolioData) {
        return (
            <div className='small_card_container'>
                <div className='small_card'>
                    <div>
                        <p>Saldo Bruto</p>
                        <h5>{Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(portfolioData.equity)}</h5>
                    </div>
                </div>
                <div className='small_card'>
                    <div>
                        <p>Valor Aplicado</p>
                        <h5>{Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(portfolioData.valueApplied)}</h5>
                    </div>
                </div>
                <div className='small_card'>
                    <div>
                        <p>Resultado</p>
                        <h5>{Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(portfolioData.equityProfit)}</h5>
                    </div>
                </div>
                <div className='small_card'>
                    <div>
                        <p>Rentabilidade</p>
                        <h5>{Intl.NumberFormat('pt-br').format(portfolioData.percentageProfit)}%</h5>
                    </div>
                </div>
                <div className='small_card'>
                    <div>
                        <p>CDI</p>
                        <h5>{Intl.NumberFormat('pt-br').format(portfolioData.indexerValue)}%</h5>
                    </div>
                </div>
                <div className='small_card'>
                    <div>
                        <p>% sobre cdi</p>
                        <h5>{Intl.NumberFormat('pt-br').format(portfolioData.percentageOverIndexer)}%</h5>
                    </div>
                </div>

            </div>
    )} else return null
}