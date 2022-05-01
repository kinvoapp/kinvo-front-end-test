import React from 'react'

import { Container, Text } from './style'

const ItemNav = ( props ) => {
  
  return(


    <Container arrow={props.arrow}>
      <img src={props.icon} />
      <Text>{props.text1}<br />{props.text2}</Text>
    </Container>
  )
}

export default ItemNav