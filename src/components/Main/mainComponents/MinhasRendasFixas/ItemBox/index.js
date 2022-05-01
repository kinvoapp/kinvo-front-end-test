import { useEffect, useState } from 'react'
import { Container, Box, Title, BoxValues } from './style'

import Value from './Values'

import Alert from '../../../../../assets/alert-icon.svg'

const ItemBox = ( props ) => {

    const [due, setDue] = useState([])
    const [fixedIncome, setFixedIncome] = useState([])
    const [position, setPosition] = useState([])

    const [tratedDate, setTratedDate] = useState([])

    // RECEBENDO OS DADOS DA API ATRAVÉS DAS PROPS
    // TRATANDO INFORMAÇÕES PARA O FORMATO DE DINHEIRO E DE DATA
    useEffect(() => {

        setDue(props.due)
        setFixedIncome(props.fixedIncome)

        const positionContent = props.position
            
        Object.keys(positionContent).forEach(item => {

            positionContent[item] = positionContent[item].toLocaleString('pt-br')

        })

        setPosition(positionContent)

        formatDate(props.due.date)
            .then( res => {
                setTratedDate(res)
            })
            
    }, [props.itemsFiltered])

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
                           value={position.valueApplied} 
                    />
                    <Value color='var(--text-color-amount-main)' 
                           title='SALDO BRUTO' 
                           value={position.equity} 
                    />
                    <Value color='var(--text-color-amount-main)' 
                           title='RENT.' 
                           value={`${position.profitability}%`} 
                    />
                    <Value color='var(--text-color-amount-main)' 
                           title='% DA CART.' 
                           value={`${position.portfolioPercentage}%`} 
                    />
                    <Value color='var(--text-color-amount-main)' 
                           title='CDI' 
                           value={position.indexerValue} 
                    />
                    <Value color='var(--text-color-amount-main)' 
                           title='SOBRE CDI' 
                           value={position.percentageOverIndexer} 
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