import React from 'react'
import { formatNumber } from '../../../../utils/formatters'

export default function PortfolioData({ portfolioData }) {
    return (
        <div className='small_card_container'>
            <div className='small_card'>
                <div>
                    <p>Saldo Bruto</p>
                    <h5 id='portfolio_equity'>{formatNumber(portfolioData.equity, 'currency')}</h5>
                </div>
            </div>
            <div className='small_card'>
                <div>
                    <p>Valor Aplicado</p>
                    <h5>{formatNumber(portfolioData.valueApplied, 'currency')}</h5>
                </div>
            </div>
            <div className='small_card'>
                <div>
                    <p>Resultado</p>
                    <h5>{formatNumber(portfolioData.equityProfit, 'currency')}</h5>
                </div>
            </div>
            <div className='small_card'>
                <div>
                    <p>Rentabilidade</p>
                    <h5>{formatNumber(portfolioData.percentageProfit)}%</h5>
                </div>
            </div>
            <div className='small_card'>
                <div>
                    <p>CDI</p>
                    <h5>{formatNumber(portfolioData.indexerValue)}%</h5>
                </div>
            </div>
            <div className='small_card'>
                <div>
                    <p>% sobre cdi</p>
                    <h5>{formatNumber(portfolioData.percentageOverIndexer)}%</h5>
                </div>
            </div>

        </div>
    )
}