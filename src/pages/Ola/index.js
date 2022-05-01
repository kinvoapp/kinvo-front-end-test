import React from 'react'

import Header from '../../components/Header'
import Nav from '../../components/Nav'
import OlaMain from '../../components/Main/OlaMain'
import { Container } from './style'

const Ola = () => {

  return(

    <Container>
      <Header />
      <Nav />
      <OlaMain />
    </Container>
  )
}

export default Ola