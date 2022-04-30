import React from 'react'

import { Container, Text } from './style'

const ItemNav = ( props ) => {

    let parser = new DOMParser();
    let doc = parser.parseFromString("<br>", "text/html");
  
  return(


    <Container arrow={props.arrow}>
      <img src={props.icon} />
      <Text>{props.text1}<br />{props.text2}</Text>
    </Container>
  )
}

export default ItemNav