import React, { useEffect, useState } from 'react'
import { LateralNav, TopNav } from '../components'
import { Container } from './styles'
import fixedIncomeAPI from '../../../services/fixedIncome'
import PortfolioDataContainer from './portfolio_data'
import IncomeTable from './income_table'
import RentabilityGraph from './rentability_graph'
import moment from 'moment'

function FixedIncome() {

    const [portfolioData, setPortfolioData] = useState()
    const [productData, setProductData] = useState()
    const [rentabilityData, setRentabilityData] = useState()

    const [usableProductData, setUsableProductData] = useState()
    const [activeProductPage, setActiveProductPage] = useState('1')
    const [searchQuery, setSearchQuery] = useState('')
    const [sortingProducts, setSortingProducts] = useState('')

    useEffect(() => {
        fixedIncomeAPI.getFixedIncomeData().then((res) => {
            if (res.data.success) {
                console.log(res.data.data)
                setPortfolioData(res.data.data.snapshotByPortfolio)
                setProductData(res.data.data.snapshotByProduct)
                setUsableProductData(res.data.data.snapshotByProduct)


                let auxRentabilityData = [...res.data.data.dailyEquityByPortfolioChartData]
                let allXAxis = auxRentabilityData.map((a) => a.dailyReferenceDate)
                let portfolioIds = auxRentabilityData.map((d) => d.portfolioProductId)
                portfolioIds = new Set(portfolioIds)
                let series = {}

                for (let portfolio of portfolioIds) {
                    let auxPortfolioData = auxRentabilityData.filter((d) => d.portfolioProductId === portfolio)
                    let name = auxPortfolioData[0].productName
                    let auxObj = {}
                    auxPortfolioData.map((r) => {

                        auxObj[r.dailyReferenceDate] = r.correctedQuota
                    })
                    allXAxis.map((p) => {
                        if (!auxObj[p]) {
                            auxObj[p] = null
                        }
                    })
                    series[portfolio] = {
                        data: Object.keys(auxObj).map((o) => auxObj[o]),
                        name: name,
                    }



                }

                setRentabilityData({
                    series: Object.keys(series).map((s) => series[s]),
                    xAxis: {
                        categories: allXAxis.map((d) => {
                            let date = new Date(d);
                            date = moment(date).format('DD/MM  hh:mm[h]')
                            return date
                        })
                    }
                })

            }
        })
    }, [])

    const getPaginatedProductData = (page) => {
        if (usableProductData) {
            return usableProductData.slice((page - 1) * 5, (page * 5))
        }
        return null
    }

    const searchProductData = (query) => {
        let auxProductData = [...usableProductData]
        if (query.length > 2) {
            auxProductData = auxProductData.filter((d) => d.fixedIncome.name.toLowerCase().includes(query.toLowerCase()))
            setUsableProductData(auxProductData)
        } else {
            setUsableProductData(productData)
        }
        setSearchQuery(query)
    }

    const handleSortingProducts = (type) => {
        setSortingProducts(type)
        let auxProductData = [...usableProductData]
        const valueLocation = type.id.split('.')

        auxProductData = auxProductData.sort((a, b) => {
            let auxA = a
            let auxB = b

            for (let position in valueLocation) {
                let auxType = valueLocation[position]
                auxA = auxA[auxType]
                auxB = auxB[auxType]
            }
            if (type.order === 0) {
                if (type.dataType === 'int') { return auxA - auxB }
                if (type.dataType === 'string') {
                    auxB = auxB.toLowerCase()
                    auxA = auxA.toLowerCase()
                    return (auxA < auxB) ? -1 : (auxA > auxB) ? 1 : 0;
                }
            } else {

                if (type.dataType === 'int') { return auxB - auxA }
                if (type.dataType === 'string') {
                    auxB = auxB.toLowerCase()
                    auxA = auxA.toLowerCase()
                    return (auxA > auxB) ? -1 : (auxA < auxB) ? 1 : 0;
                }
            }
        })
        setUsableProductData(auxProductData)

    }

    return (
        <Container>
            <TopNav />
            <LateralNav />
            <div className='content_container'>
                <h1>Renda Fixa</h1>
                <PortfolioDataContainer portfolioData={portfolioData} />
                <RentabilityGraph rentabilityData={rentabilityData} />
                <IncomeTable productData={getPaginatedProductData(activeProductPage)}
                    activePage={activeProductPage}
                    setActivePage={setActiveProductPage}
                    search={searchQuery}
                    setSearch={searchProductData}
                    productDataLength={usableProductData ? usableProductData.length : 0}
                    sortingProducts={sortingProducts}
                    setSortingProducts={handleSortingProducts} />
            </div>
        </Container>
    )
}

export default FixedIncome