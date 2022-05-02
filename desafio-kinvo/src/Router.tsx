import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FixedIncomeProvider from './contexts/fixedIncome/Provider';

import FixedIncome from './pages/FixedIncome';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={(
            <FixedIncomeProvider>
              <FixedIncome />
            </FixedIncomeProvider>
          )}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
