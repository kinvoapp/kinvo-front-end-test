import React, { useEffect, useState } from 'react'
import { LateralNav, TopNav } from '../components'
import { Container } from './styles'
import fixedIncomeAPI from '../../../services/fixedIncome'
import PortfolioDataContainer from './portfolio_data'
import IncomeTable from './income_table'

function FixedIncome() {

    const [portfolioData, setPortfolioData] = useState()
    const [productData, setProductData] = useState()
    const [usableProductData, setUsableProductData] = useState()
    const [activeProductPage, setActiveProductPage] = useState(1)
    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
        fixedIncomeAPI.getFixedIncomeData().then((res) => {
            if (res.data.success) {
                setPortfolioData(res.data.data.snapshotByPortfolio)
                let auxProductData = res.data.data.snapshotByProduct
                auxProductData[5].fixedIncome.name = 'CDD Teste de Produto'
                setProductData(auxProductData)
                setUsableProductData(auxProductData)
            }
        })
    }, [])

    const getPaginatedProductData = (page) => {
        if(usableProductData){
            return usableProductData.slice((page - 1) * 5 , (page * 5))
        }
        return null
    }

    const searchProductData = (query) => {
        let auxProductData = [...usableProductData]
        if(query.length > 2){
            auxProductData = auxProductData.filter((d) => d.fixedIncome.name.toLowerCase().includes(query.toLowerCase()))
            setUsableProductData(auxProductData)
        } else  {
            setUsableProductData(productData)
        }
        setSearchQuery(query)
    }

    return (
        <Container>
            <TopNav />
            <LateralNav />
            <div className='content_container'>
                <h1>Renda Fixa</h1>
                <PortfolioDataContainer portfolioData={portfolioData}/>
                <IncomeTable productData={getPaginatedProductData(activeProductPage)}
                             activePage={activeProductPage}
                             setActivePage={setActiveProductPage}
                             search={searchQuery}
                             setSearch={searchProductData}
                             productDataLength={usableProductData ? usableProductData.length : 0}/>
            </div>
        </Container>
    )
}

export default FixedIncome