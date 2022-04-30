import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Hello from './Hello'
import Ola from './Ola'

const AppRoutes = () => {

  return(

    <Routes>
      <Route path="/" element={<Hello />} />
      <Route path="/Ola" element={<Ola />} />
    </Routes>
  )
}

export default AppRoutes