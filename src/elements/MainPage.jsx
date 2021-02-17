import React from 'react'

import { Row } from '../styles'
import { Columns } from '../styles'

import Header from './Header'
import MainContent from './MainContent'
import SideMenu from './SideMenu'

const MainPage = () => {
  return (
    <div style={{'background-color':'#EEF2F4'}}>
      <Row>
        <Header />
      </Row>

      <Columns>
        <SideMenu />
        <MainContent/>
      </Columns>
    </div>
    
  )
}

export default MainPage
