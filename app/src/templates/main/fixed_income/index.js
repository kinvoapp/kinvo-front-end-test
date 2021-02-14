import React, { useEffect, useState } from 'react'
import { LateralNav, TopNav } from '../components'
import { Container } from './styles'
import fixedIncomeAPI from '../../../services/fixedIncome'

function FixedIncome() {

    const [portifolioData, setPortifolioData] = useState()


    useEffect(() => {
        fixedIncomeAPI.getFixedIncomeData().then((res) => {
            if (res.data.success) {
                setPortifolioData(res.data.data.snapshotByPortfolio)
            }
        })
    }, [])

    return (
        <Container>
            <TopNav />
            <LateralNav />
            <div className='content_container'>
                <h1>Renda Fixa</h1>

                {portifolioData &&
                    <div className='small_card_container'>
                        <div className='small_card'>
                            <div>
                                <p>Saldo Bruto</p>
                                <h5>{Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(portifolioData.equity)}</h5>
                            </div>
                        </div>
                        <div className='small_card'>
                            <div>
                                <p>Valor Aplicado</p>
                                <h5>{Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(portifolioData.valueApplied)}</h5>
                            </div>
                        </div>
                        <div className='small_card'>
                            <div>
                                <p>Resultado</p>
                                <h5>{Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(portifolioData.equityProfit)}</h5>
                            </div>
                        </div>
                        <div className='small_card'>
                            <div>
                                <p>Rentabilidade</p>
                                <h5>{Intl.NumberFormat('pt-br').format(portifolioData.percentageProfit)}%</h5>
                            </div>
                        </div>
                        <div className='small_card'>
                            <div>
                                <p>CDI</p>
                                <h5>{Intl.NumberFormat('pt-br').format(portifolioData.indexerValue)}%</h5>
                            </div>
                        </div>
                        <div className='small_card'>
                            <div>
                                <p>% sobre cdi</p>
                                <h5>{Intl.NumberFormat('pt-br').format(portifolioData.percentageOverIndexer)}%</h5>
                            </div>
                        </div>

                    </div>}

            </div>
        </Container>
    )
}

export default FixedIncome