import React from 'react'
import { Routes, Route } from 'react-router-dom'

import ResumoDaCarteira from './pages/ResumoDaCarteira'
import FundoRendaFixa from './pages/FundoRendaFixa'
import Ola from './pages/Ola'

const AppRoutes = () => {

  return(

    <Routes>
      <Route path="/" element={<ResumoDaCarteira />} />
      <Route path="/Ola" element={<Ola />} />
      <Route path="/classe-ativos/fundo-renda-fixa" element={<FundoRendaFixa />} />
    </Routes>
  )
}

export default AppRoutes