import React, { useEffect, useState } from 'react'
import { LateralNav, TopNav } from '../components'
import { Container } from './styles'
import fixedIncomeAPI from '../../../services/fixedIncome'
import PortfolioDataContainer from './portfolio_data'
import IncomeTable from './income_table'

function FixedIncome() {

    const [portfolioData, setPortfolioData] = useState()
    const [productData, setProductData] = useState()


    useEffect(() => {
        fixedIncomeAPI.getFixedIncomeData().then((res) => {
            if (res.data.success) {
                setPortfolioData(res.data.data.snapshotByPortfolio)
                let auxProductData = res.data.data.snapshotByProduct
                auxProductData[5].fixedIncome.name = 'CDD Teste de Produto'
                setProductData(auxProductData)
                console.log(res.data.data.snapshotByProduct)
            }
        })
    }, [])

    const getPaginatedProductData = (page) => {
        if(productData){
            return productData.slice((page - 1) * 5 , (page * 5))
        }
        return null
    }

    return (
        <Container>
            <TopNav />
            <LateralNav />
            <div className='content_container'>
                <h1>Renda Fixa</h1>
                <PortfolioDataContainer portfolioData={portfolioData}/>
                <IncomeTable productData={getPaginatedProductData(1)}/>
            </div>
        </Container>
    )
}

export default FixedIncome