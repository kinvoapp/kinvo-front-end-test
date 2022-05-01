import { useEffect, useState, currencyFormat } from 'react'
import { Container, Box, Title, BoxValues } from './style'

import Value from './Values'

import Alert from '../../../../../assets/alert-icon.svg'

const ItemBox = ( props ) => {

    const [due, setDue] = useState([])
    const [fixedIncome, setFixedIncome] = useState([])

    const [tratedDate, setTratedDate] = useState([])
    const [tratedApplied, setTratedValueApplied] = useState([])
    const [tratedPercentage, setTratedPercentage] = useState([])
    const [tratedEquity, setTratedEquity] = useState([])
    const [tratedPortfolioPercentage, setTratedPortfolioPercentage] = useState([])
    const [TratedIndexerValue, setTratedIndexerValue] = useState([])
    const [TratedPercentageOverIndexer, setTratedPercentageOverIndexer] = useState([])

    useEffect(() => {

        setDue(props.due)
        setFixedIncome(props.fixedIncome)

        //indexerValue

        formatMoneyNumber(props.position.valueApplied)
            .then( res => {
                setTratedValueApplied(res)
            })

        formatMoneyNumber(props.position.equity)
            .then( res => {
                setTratedEquity(res)
            })

        formatMoneyNumber(props.position.profitability)
            .then( res => {
                setTratedPercentage(res)
            })

        formatMoneyNumber(props.position.portfolioPercentage)
            .then( res => {
                setTratedPortfolioPercentage(res)
            })

        formatMoneyNumber(props.position.indexerValue)
            .then( res => {
                setTratedIndexerValue(res)
            })

        formatMoneyNumber(props.position.percentageOverIndexer)
            .then( res => {
                setTratedPercentageOverIndexer(res)
            })

        formatDate(props.due.date)
            .then( res => {
                setTratedDate(res)
            })
            
    }, [])

    const formatMoneyNumber = async ( n ) => {

        let number = await n

        let money = number.toLocaleString('pt-br')

        return money
    }

    const formatDate = async ( d ) => {

        let date = await d

        return date.replace(/\//g, '.')
    }

    return(

        <Container>
            <Box minWidth={300} maxWidth={372}>
                <Title>
                    <span>TÍTULO</span>
                    <img src={Alert} />
                </Title>
                <BoxValues>
                    <div className='tituloDiv1'>
                        <span>{fixedIncome.name}</span>
                    </div>
                    <div className='tituloDiv2'>
                        <span>Classe</span>
                        <span className='tesDir'>{fixedIncome.bondType}</span>
                    </div>
                </BoxValues>
            </Box>
            <Box minWidth={455} maxWidth={198}>
                <Title>
                    <span>MINHA POSIÇÃO</span>
                    <img src={Alert} />
                </Title>
                <BoxValues>
                    <Value color='var(--text-color-amount-main)' 
                           title='VALOR INVES.' 
                           value={tratedApplied} 
                    />
                    <Value color='var(--text-color-amount-main)' 
                           title='SALDO BRUTO' 
                           value={tratedEquity} 
                    />
                    <Value color='var(--text-color-amount-main)' 
                           title='RENT.' 
                           value={`${tratedPercentage}%`} 
                    />
                    <Value color='var(--text-color-amount-main)' 
                           title='% DA CART.' 
                           value={tratedPortfolioPercentage} 
                    />
                    <Value color='var(--text-color-amount-main)' 
                           title='CDI' 
                           value={TratedIndexerValue} 
                    />
                    <Value color='var(--text-color-amount-main)' 
                           title='SOBRE CDI' 
                           value={TratedPercentageOverIndexer} 
                    />
                </BoxValues>
            </Box>
            <Box minWidth={150} maxWidth={459}>
                <Title>
                    <span>VENCIMENTO</span>
                    <img src={Alert} />
                </Title>
                <BoxValues>
                    <Value color='var(--text-color-amount-main-2)' 
                           title='DATA VENC.' 
                           value={tratedDate} 
                    />
                    <Value color='var(--text-color-amount-main-2)' 
                           title='DIAS ATÉ VENC.' 
                           value={due.daysUntilExpiration} 
                    />
                </BoxValues>
            </Box>
        </Container>
    )
}

export default ItemBox