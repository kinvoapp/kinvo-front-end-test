import React, { useEffect, useState} from 'react'

import { RenderDashboard, Title, ContainerValuesDisplay } from './style'

import api from '../../../../api/api'

import BoxValue from '../../mainComponents/BoxValue'
import Graphic from '../../mainComponents/Graphic'
import MinhasRendasFixas from '../../mainComponents/MinhasRendasFixas'

const FundoRendaFixaMain = () => {

  const [dataRendaFixa, setDataRendaFixa] = useState({})

  useEffect(() => {

    api.get('')
        .then(( res ) => {

            let { snapshotByPortfolio } = res.data.data

            Object.keys(snapshotByPortfolio).forEach(item => {

              snapshotByPortfolio[item] = snapshotByPortfolio[item].toLocaleString('pt-br')

            })

            setDataRendaFixa(snapshotByPortfolio)
            
          })
          
  }, [])

  return(

   <RenderDashboard>
     <Title>Renda Fixa</Title>
     <ContainerValuesDisplay>
      <BoxValue title='SALDO BRUTO' 
                amount={`R$${dataRendaFixa.equity}`}
      />
      <BoxValue title='VALOR APLICADO' 
                amount={`R$${dataRendaFixa.valueApplied}`}
      />
      <BoxValue title='RESULTADO' 
                amount={`R$${dataRendaFixa.equityProfit}`}
      />
      <BoxValue title='RENTABILIDADE' 
                amount={`${dataRendaFixa.percentageProfit}%`}
      />
      <BoxValue title='CDI' 
                amount={`${dataRendaFixa.indexerValue}%`}
      />
      <BoxValue title='% SOBRE CDI' 
                amount={`${dataRendaFixa.percentageOverIndexer}%`}
      />
     </ContainerValuesDisplay>
     <Graphic />
     <MinhasRendasFixas />
   </RenderDashboard> 
  )
}

export default FundoRendaFixaMain