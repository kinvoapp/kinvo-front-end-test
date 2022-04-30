import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Nav from '../../components/Nav'
import Main from '../../components/Main'

import { Container } from './style'

const Dashboard = () => {
 
    useEffect(() => {

      fetch('https://60b6ad6f17d1dc0017b882fd.mockapi.io/mock/getFixedIncomeClassData').then((res) => {
    
      return res.json()
    }).then( data => {
    
      console.log(data)
    })
      
    }, [])

  return(

    <Container>
      <Header />
      <Nav />
      <Main />
    </Container>
  )
}

export default Dashboard