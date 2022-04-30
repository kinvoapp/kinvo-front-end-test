import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

import { HenderDashboard } from './style'

const Main = () => {

  return(

   <HenderDashboard>
     <BrowserRouter>
      <Routes />
     </BrowserRouter>
   </HenderDashboard> 
  )
}

export default Main