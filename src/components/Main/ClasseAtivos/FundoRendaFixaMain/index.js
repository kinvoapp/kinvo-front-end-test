import React from 'react'

import { RenderDashboard, Title, ContainerValuesDisplay } from './style'

import BoxValue from '../../mainComponents/BoxValue'
import Graphic from '../../mainComponents/Graphic'
import MinhasRendasFixas from '../../mainComponents/MinhasRendasFixas'

const FundoRendaFixaMain = () => {

  return(

   <RenderDashboard>
     <Title>Renda Fixa</Title>
     <ContainerValuesDisplay>
      <BoxValue title='SALDO BRUTO' 
                amount='121.212,00'
      />
      <BoxValue title='VALOR APLICADO' 
                amount='170.025,64'
      />
      <BoxValue title='RESULTADO' 
                amount='37.638,46'
      />
      <BoxValue title='RENTABILIDADE' 
                amount='25,08%'
      />
      <BoxValue title='CDI' 
                amount='23,68%'
      />
      <BoxValue title='% SOBRE CDI' 
                amount='320%'
      />
     </ContainerValuesDisplay>
     <Graphic />
     <MinhasRendasFixas />
   </RenderDashboard> 
  )
}

export default FundoRendaFixaMain