import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import FixedIncome from './pages/FixedIncome';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FixedIncome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
