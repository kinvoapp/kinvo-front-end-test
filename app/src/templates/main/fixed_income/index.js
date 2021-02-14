import React, { useEffect } from 'react'
import { LateralNav, TopNav } from '../components'
import { Container } from './styles'
import fixedIncomeAPI from '../../../services/fixedIncome'

function FixedIncome() {

    useEffect(() => {
        fixedIncomeAPI.getFixedIncomeData().then((res) => console.log(res))
    }, [])

    return (
        <Container>
            <TopNav />
            <LateralNav />
            <div className='content_container'>
                <h1>Renda Fixa</h1>

                <div className='small_card_container'>
                    <div className='small_card'>
                        <div>
                            <p>Saldo Bruto</p>
                            <h5>R$ 207.653,10</h5>
                        </div>
                    </div>
                    <div className='small_card'>
                        <div>
                            <p>Valor Aplicado</p>
                            <h5>R$ 170.025,64</h5>
                        </div>
                    </div>
                    <div className='small_card'>
                        <div>
                            <p>Resultado</p>
                            <h5>R$ 37.638,46</h5>
                        </div>
                    </div>
                    <div className='small_card'>
                        <div>
                            <p>Rentabilidade</p>
                            <h5>25,08%</h5>
                        </div>
                    </div>
                    <div className='small_card'>
                        <div>
                            <p>CDI</p>
                            <h5>23,68%</h5>
                        </div>
                    </div>
                    <div className='small_card'>
                        <div>
                            <p>% sobre cdi</p>
                            <h5>320%</h5>
                        </div>
                    </div>

                </div>

            </div>
        </Container>
    )
}

export default FixedIncome