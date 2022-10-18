import React from 'react';
import { Routes, Route } from 'react-router-dom';

import GlobalStyles from './styles/globalStyles';
import Header from './components/header';
import Sidebar from './components/sidebar';
import RendaFixa from './pages/FundoRendaFixa';
import Page404 from './pages/page404';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="minha_carteira" element={<Sidebar />}>
            <Route path="classe_ativos" element={null} />
            <Route
              path="classe_ativos/fundo_renda_fixa"
              element={<RendaFixa />}
            />
            <Route path="*" element={<Page404 />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
      <GlobalStyles />
    </>
  );
}

export default App;
