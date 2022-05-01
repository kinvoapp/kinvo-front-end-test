import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Nav from '../../components/Nav'
import ResumoDaCarteiraMain from '../../components/Main/ResumoDaCarteiraMain'

import { Container } from './style'

const ResumoDaCarteira = () => {

  return(

    <Container>
      <Header />
      <Nav />
      <ResumoDaCarteiraMain />
    </Container>
  )
}

export default ResumoDaCarteira